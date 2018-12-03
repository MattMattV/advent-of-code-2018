defmodule AdventOfCode2018.Day01Test do
  use ExUnit.Case

  import AdventOfCode2018.Day01

  doctest AdventOfCode2018.Day01

  test "part 1" do
    fileContent = File.read!(Path.absname("./test/inputs/day_01.txt"))

    input = String.replace(fileContent, "\n", ",")

    result = part1(input)

    assert is_number(result)
    IO.write ~s(Part 1 result #{result})
  end

  @tag :skip
  test "part2" do
    input = nil
    result = part2(input)

    assert result
  end
end