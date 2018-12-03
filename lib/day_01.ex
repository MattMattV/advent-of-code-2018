defmodule AdventOfCode2018.Day01 do
  @doc """
  Parse a list of numbers (integers) and add them together
  Returns the sum of all additions

  ## Examples
      iex> AdventOfCode2018.Day01.part1("+1, +1, +1")
      3

      iex> AdventOfCode2018.Day01.part1("+1, +1, -2")
      0

      iex> AdventOfCode2018.Day01.part1("-1, -2, -3")
      -6
  """
  def part1(input) do
    operations = String.split(input, ",", trim: true)

    Enum.reduce(operations, 0, fn(operation, acc) -> acc + (operation |> String.trim |> String.to_integer) end)
  end

  def part2(args) do
  end
end