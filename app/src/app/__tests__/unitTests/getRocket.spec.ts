import { RocketRepository } from "@/app/adaptors/rocketRepository";
import { Rocket } from "@/app/domain/rocket";
import { GetRockets } from "@/app/usecases/getRocket";

describe("GetRockets Use Case", () => {
  let mockRocketRepository: RocketRepository;

  beforeEach(() => {
    mockRocketRepository = {
      getRockets: jest.fn(),
    };
  });

  it("should return a list of rockets", async () => {
    const rockets: Rocket[] = [
      {
        id: "1",
        name: "Ariane",
        description: "rocket1",
        image: "Ariane1.png",
      },
      {
        id: "2",
        name: "Ariane",
        description: "rocket2",
        image: "Ariane2.png",
      },
    ];

    (mockRocketRepository.getRockets as jest.Mock).mockResolvedValue(rockets);

    const getRockets = new GetRockets(mockRocketRepository);

    const result = await getRockets.execute();

    expect(result).toEqual(rockets);
    expect(mockRocketRepository.getRockets).toHaveBeenCalledTimes(1);
  });
});
