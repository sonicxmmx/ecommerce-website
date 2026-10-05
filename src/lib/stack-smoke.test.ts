import { describe, expect, it } from "vitest";
import { z } from "zod";
import { useForm } from "react-hook-form";

void useForm;

describe("stack smoke", () => {
  it("validates Zod and loads React Hook Form", () => {
    const schema = z.object({ email: z.string().email() });
    expect(schema.safeParse({ email: "test@example.com" }).success).toBe(true);
    expect(schema.safeParse({ email: "not-an-email" }).success).toBe(false);
    expect(useForm).toBeTypeOf("function");
  });
});