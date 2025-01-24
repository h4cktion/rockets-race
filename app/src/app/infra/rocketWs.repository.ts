import { RocketProgressEvent } from "../domain/rocketProgressEvent";
import { initializeGraphQLWsClient } from "./graphql/graphWsClient";

type RocketProgressResponse = {
  data?: {
    rocketProgress?: RocketProgressEvent;
  };
  errors?: unknown;
};

export async function subscribeToRocketProgress(
  raceId: string,
  rocketId: string,
  onEvent: (event: RocketProgressEvent) => void,
  onError?: (error: any) => void
) {
  const client = initializeGraphQLWsClient();

  const payload = {
    query: `
      subscription RocketProgress($raceId: ID!, $rocketId: ID!) {
        rocketProgress(raceId: $raceId, rocketId: $rocketId) {
          raceId
          rocketId
          progress
          exploded
        }
      }
    `,
    variables: { raceId, rocketId },
  };

  const dispose = client.subscribe<RocketProgressResponse>(payload, {
    next: (data) => {
      console.log("Données de la souscription reçues:", data);

      if (data.errors) {
        console.error("Erreurs de souscription:", data.errors);
        onError?.(data.errors);
        // @ts-ignore TODO: Je n'arrvie pas à régler le pb pour l'instant
      } else if (data.data?.rocketProgress) {
        // @ts-ignore  TODO: Je n'arrvie pas à régler le pb pour l'instant
        const rocketProgress = data.data.rocketProgress;
        if (rocketProgress) {
          const event: RocketProgressEvent = {
            raceId: rocketProgress.raceId,
            rocketId: rocketProgress.rocketId,
            progress: rocketProgress.progress,
            exploded: rocketProgress.exploded,
          };

          onEvent(event);
        }
      }
    },
    error: (err) => {
      console.error("Erreur dans la souscription:", err);
      onError?.(err);
    },
    complete: () => {
      console.log("Souscription terminée");
    },
  });

  return dispose;
}
