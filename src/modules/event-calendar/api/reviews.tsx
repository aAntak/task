enum ReviewState {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
}

type Review = {
  id: number;
  summary: string;
  url: string;
  state: ReviewState;
  start: string;
  end: string;
};

const reviewsService = {
  find: async (): Promise<Review[]> => {
    const response = await fetch(
      'https://66740dcb75872d0e0a94e1c0.mockapi.io/reviews'
    );
    const data = await response.json();
    return data;
  },
};

export { reviewsService, ReviewState };
export type { Review };
