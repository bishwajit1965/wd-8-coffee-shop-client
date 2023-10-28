import FollowUsCard from "../followUsCard/FollowUsCard";
import PageTitle from "../../components/common/PageTitle/PageTitle";

const FollowUs = ({ gallery, setGallery }) => {
  return (
    <div className="lg:my-10 my-2 coffee-bg">
      <PageTitle
        topSlogan="--- Follow Us ---"
        pageTitle="Follow Us on Instagram"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 justify-between lg:my-10 my-4 lg:p-20 p-2">
        {gallery.map((singleGallery) => (
          <FollowUsCard
            key={singleGallery._id}
            singleGallery={singleGallery}
            gallery={gallery}
            setGallery={setGallery}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
