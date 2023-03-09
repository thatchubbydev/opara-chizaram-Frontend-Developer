import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import InputField from "./InputField";

jest.mock("axios");

const mockCapsules = [
  {
    capsule_serial: "C101",
    capsule_id: "dragon1",
    status: "active",
    original_launch: "2010-12-08T15:43:00.000Z",
    type: "Dragon 1.0",
  },
  {
    capsule_serial: "C102",
    capsule_id: "dragon1",
    status: "retired",
    original_launch: "2012-05-22T07:44:00.000Z",
    type: "Dragon 1.0",
  },
];

describe("InputField component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockCapsules });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search input and filters", () => {
    render(<InputField />);

    const searchInput = screen.getByRole("textbox", { name: /search/i });
    expect(searchInput).toBeInTheDocument();

    const statusFilter = screen.getByRole("combobox", { name: /status/i });
    expect(statusFilter).toBeInTheDocument();

    const launchFilter = screen.getByRole("combobox", { name: /launch/i });
    expect(launchFilter).toBeInTheDocument();

    const typeFilter = screen.getByRole("combobox", { name: /type/i });
    expect(typeFilter).toBeInTheDocument();
  });

  it("renders a list of capsules", async () => {
    render(<InputField />);

    const searchInput = screen.getByRole("textbox", { name: /search/i });
    userEvent.type(searchInput, "C101");

    const exploreButton = await screen.findByRole("button", {
      name: /explore/i,
    });
    userEvent.click(exploreButton);

    const capsuleDetails = await screen.findByRole("dialog", {
      name: /capsule details/i,
    });
    expect(capsuleDetails).toBeInTheDocument();
  });
});
