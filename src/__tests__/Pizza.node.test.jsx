import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza"

afterEach(cleanup)

test("alt test renders on Pizza images", async () => {
    const name = "My Favourite Pizza"
    const src = "https://picsum.photos/200"

    const screen = render(
        <Pizza name={name} description="super cool pizza" image={src} />
    )
    const img = screen.getByRole("img")
    expect(img.src).toBe(src)
    expect(img.alt).toBe(name)
})

test("Default image", async () => {

    const screen = render(
        <Pizza name="Something else" description="super cool pizza" />
    )
    const img = screen.getByRole("img")
    expect(img.src).not.toBe("")
})