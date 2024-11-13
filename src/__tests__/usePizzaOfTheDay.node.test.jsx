import { expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock"
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

const testPizza = {
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description: "WAh dnajsndja",
    image: "/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 }

}

fetchMocker(testPizza)

function getPizzaOfTheDay() {
    let pizza;

    function TestComponent() {
        pizza = usePizzaOfTheDay()
        return null
    }
    render(<TestComponent />)
    return pizza
}

test("gives null first called", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza))
    const { result } = renderHook(() => usePizzaOfTheDay())
    expect(result.current).toBeNull()
})

test("to call API and give POTD", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza))
    const { result } = renderHook(() => usePizzaOfTheDay())
    await waitFor(() => expect(result.current).toEqual(testPizza))
    expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day")
})