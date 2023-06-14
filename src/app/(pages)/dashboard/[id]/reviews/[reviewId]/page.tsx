interface ProductsProps {
  params: {
    reviewId: string;
  };
}
export default function ReviewId({ params }: ProductsProps) {
  return (
    <div>
      <div>
        <h2>Reviews {params.reviewId}</h2>
      </div>
    </div>
  );
}
