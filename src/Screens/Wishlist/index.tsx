import { useSelector } from "react-redux";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";

export const Wishlist = () => {
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  return (
    <div>
      <h1>My Wishlist ({wishlistItems.length})</h1>
      {wishlistItems.map((item) => (
        <>
          <div>
            <img src={item.imageurl}></img>
            <p>{item.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};
