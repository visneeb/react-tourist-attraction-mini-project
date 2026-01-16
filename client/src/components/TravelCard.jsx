import { Link } from "lucide-react";

function TravelCard({ trips, onTagClick }) {
  return (
    <div className="grid grid-cols-1 gap-6 items-center">
      {trips.map((trip) => (
        <div key={trip.eid} className="flex flex-row gap-4 p-4 ">
          {/* Main photo */}
          <img
            src={trip.photos?.[0]}
            alt={trip.title}
            className="w-80 h-55 object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-1 px-3 ">
            <a className="font-semibold text-xl" href={trip.url}>
              {trip.title}
            </a>

            <p>{trip.description.slice(0, 100)}...</p>

            <a
              href={trip.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              อ่านต่อ
            </a>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span>หมวด</span>
              {trip.tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer hover:text-gray-300  underline"
                  onClick={() => onTagClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-row justify-around gap-100">
              {/* Photo gallery */}
              <div className="flex gap-6 mt-2 px-">
                {trip.photos?.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${trip.title}-${index + 1}`}
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
              <div className="flex items-end ">
                <button
                  className="w-10 h-10 aspect-square flex items-center justify-center border rounded-full border-blue-500 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(trip.url);
                    alert("Link copied to clipboard");
                  }}
                >
                  <Link className="w-5 h-5 text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelCard;
