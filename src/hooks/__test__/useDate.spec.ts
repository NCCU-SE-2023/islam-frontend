import { describe, test, expect } from "vitest";
import useDate from "../useDate";

describe("useDate test", () => {
  const { getDate } = useDate();
  test("test time stamp to formated time string in desktop", () => {
    expect(getDate.value("2023-06-01T12:00:00.000Z")).toBe(
      "2023/06/01 12:00:00"
    );
    expect(getDate.value("2023-06-10T12:00:00.000Z")).toBe(
      "2023/06/10 12:00:00"
    );
    expect(getDate.value("2023-10-01T12:00:00.000Z")).toBe(
      "2023/10/01 12:00:00"
    );
    expect(getDate.value("2023-10-10T12:00:00.000Z")).toBe(
      "2023/10/10 12:00:00"
    );
    expect(getDate.value("2023-06-01T08:00:00.000Z")).toBe(
      "2023/06/01 08:00:00"
    );
    expect(getDate.value("2023-06-01T12:01:00.000Z")).toBe(
      "2023/06/01 12:01:00"
    );
    expect(getDate.value("2023-06-01T12:20:00.000Z")).toBe(
      "2023/06/01 12:20:00"
    );
    expect(getDate.value("2023-06-01T12:00:01.000Z")).toBe(
      "2023/06/01 12:00:01"
    );
    expect(getDate.value("2023-06-01T12:00:20.000Z")).toBe(
      "2023/06/01 12:00:20"
    );
  });
  test("test time stamp to formated time string in mobile", () => {
    expect(getDate.value("2023-06-01T12:00:00.000Z", true)).toBe("06/01 12:00");
    expect(getDate.value("2023-06-10T12:00:00.000Z", true)).toBe("06/10 12:00");
    expect(getDate.value("2023-10-01T12:00:00.000Z", true)).toBe("10/01 12:00");
    expect(getDate.value("2023-10-10T12:00:00.000Z", true)).toBe("10/10 12:00");
    expect(getDate.value("2023-06-01T08:00:00.000Z", true)).toBe("06/01 08:00");
    expect(getDate.value("2023-06-01T12:01:00.000Z", true)).toBe("06/01 12:01");
    expect(getDate.value("2023-06-01T12:20:00.000Z", true)).toBe("06/01 12:20");
    expect(getDate.value("2023-06-01T12:00:01.000Z", true)).toBe("06/01 12:00");
    expect(getDate.value("2023-06-01T12:00:20.000Z", true)).toBe("06/01 12:00");
  });
});
