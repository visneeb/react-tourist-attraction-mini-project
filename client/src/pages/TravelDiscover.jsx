import SearchBox from "../components/SearchBox";
import TravelCard from "../components/TravelCard";
import { useTrips } from "../hooks/useTrips";

function TravelPage() {
  const { trips, searchText, setSearchText } = useTrips();

  const handleTagClick = (tag) => {
    setSearchText((prev) =>
      prev.split(" ").includes(tag) ? prev : prev ? `${prev} ${tag}` : tag
    );
  };

  return (
    <div className="flex flex-col justify-center items-center py-14">
      <h1 className="text-4xl font-semibold text-[#2394C9]">เที่ยวไหนดี</h1>

      <SearchBox value={searchText} onChange={setSearchText} />

      <TravelCard trips={trips} onTagClick={handleTagClick} />
    </div>
  );
}

export default TravelPage;
