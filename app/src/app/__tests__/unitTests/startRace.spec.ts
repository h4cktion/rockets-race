describe("ApolloRocketRepository", () => {
  let mockRocketRepository: { startRace: jest.Mock };

  beforeEach(() => {
    mockRocketRepository = {
      startRace: jest.fn(),
    };
  });

  it("should call startRace with the correct arguments", async () => {
    const rocket1Id = "rocket1";
    const rocket2Id = "rocket2";

    const rocketPrograss1Id = { id: rocket1Id, progress: 3, exploded: false };
    const rocketPrograss2Id = { id: rocket2Id, progress: 3, exploded: false };

    const mockRaceResult = {
      id: "race1",
      rocket1: rocketPrograss1Id,
      rocket2: rocketPrograss2Id,
      winner: null,
    };

    mockRocketRepository.startRace.mockResolvedValue(mockRaceResult);

    const result = await mockRocketRepository.startRace(rocket1Id, rocket2Id);

    expect(mockRocketRepository.startRace).toHaveBeenCalledWith(
      rocket1Id,
      rocket2Id
    );
    expect(result).toEqual(mockRaceResult);
  });
});
