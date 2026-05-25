import { describe, expect, it } from "vitest";
import { parseAuthTokenArgs } from "./tonal-auth-token";

describe("parseAuthTokenArgs", () => {
  it("accepts direct script arguments", () => {
    expect(parseAuthTokenArgs(["member@example.com"])).toEqual({
      email: "member@example.com",
      passwordArg: undefined
    });
  });

  it("ignores the leading argument delimiter passed by pnpm run", () => {
    expect(parseAuthTokenArgs(["--", "member@example.com"])).toEqual({
      email: "member@example.com",
      passwordArg: undefined
    });
  });

  it("keeps an optional password argument after the email", () => {
    expect(parseAuthTokenArgs(["--", "member@example.com", "password"])).toEqual({
      email: "member@example.com",
      passwordArg: "password"
    });
  });
});
