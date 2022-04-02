import { useNavigate } from "react-router-dom";

import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlood, reset } from "../features/blood/bloodSlice";
import ClipLoader from "react-spinners/ClipLoader";
/*Components */
import Feed from "../components/Feed";
import Pagination from "../components/Pagination";
/*Icons */
import { BiDonateBlood } from "react-icons/bi";

let PageSize = 5;

function Give({ bloodInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { blood, isLoading, isError, message } = useSelector(
    (state) => state.blood
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getBlood());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    <div className="flex justify-center mt-72 mb-64">
      <ClipLoader />
    </div>;
  }
  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blood.slice(firstPageIndex, lastPageIndex);
  }, [blood, currentPage]);

  /* Search */
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = blood.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(blood);
    }
  };
  return (
    <>
      <div
        className="receiveTitle text-red-500 flex justify-center text-4xl md:text-6xl font-bold mt-5"
        style={{ fontFamily: "Montserrat" }}
      >
        Give
      </div>
      <div className="receiveIcon flex justify-center text-red-500 text-3xl md:text-5xl mt-8">
        <BiDonateBlood />
      </div>
      {/* Details */}
      <div
        className="description mx-4 flex justify-center text-red-500 text-xl font-bold mt-12 "
        style={{ fontFamily: "Montserrat" }}
      >
        <ul>
          <li className="my-4 mx-4">
            <span className="text-cyan-700">Search:</span> Just type your search
            term and it will automatically get filtered.
          </li>
          <li className="my-4 mx-4">
            <span className="text-cyan-700">BloodType:</span> To search type the
            blood type letter and neg for - and pos for + attached to the letter
            ex: apos (A+).
          </li>
          <li className="my-4 mx-4">
            <span className="text-cyan-700">Create:</span> Press the create
            button so that people in need can contact you to receive blood from
            you.
          </li>
          <li className="my-4 mx-4">
            <span className="text-cyan-700">Card:</span> Contains 4 information
            fields 1)Name 2)BloodType 3)Contact 4)Location.
          </li>
          <li className="my-4 mx-4">
            <span className="text-cyan-700">Delete:</span> The delete button
            represented by trash icon will only delete your post when pressed.
          </li>
        </ul>
      </div>

      {/* Search  */}
      <div className="search mt-20  flex justify-center">
        <div className="searchCard mx-4  flex justify-start">
          <input
            type="text"
            placeholder="Search ... "
            onChange={(e) => searchItems(e.target.value)}
            className="focus:outline-none shadow-lg shadow-slate-500   w-[190px] md:w-[275px] h-10 px-3 pt-1 pb-2 font-semibold font-sans rounded-lg border-2 border-slate-700"
          ></input>
        </div>
        {/* Create */}
        <div className="create">
          <button
            onClick={() => {
              navigate("/create-give");
            }}
            className=" mx-2 px-4 py-1 mt-0.5 rounded-lg border-2 bg-red-500 shadow-lg shadow-slate-500 text-slate-900 border-slate-900 font-semibold"
            style={{ fontFamily: "Montserrat" }}
          >
            Create +
          </button>
        </div>
      </div>

      {/* Feed */}

      <section className="content">
        {searchInput.length > 1 ? (
          <>
            <div className="blood">
              {filteredResults.map((bloodInfo) => (
                <Feed key={bloodInfo._id} bloodInfo={bloodInfo} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="blood">
              {currentTableData.map((bloodInfo) => (
                <Feed key={bloodInfo._id} bloodInfo={bloodInfo} />
              ))}
            </div>
            <div className="flex mt-10 justify-center">
              <Pagination
                currentPage={currentPage}
                totalCount={blood.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Give;
