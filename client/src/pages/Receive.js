import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getReceive, reset } from "../features/receive/receiveSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState, useMemo } from "react";

/*Components */
import ReceiveFeed from "../components/ReceiveFeed";
import Pagination from "../components/Pagination";

/*Icons */

import { RiUserReceivedLine } from "react-icons/ri";

let PageSize = 5;

function Receive() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { receives, isLoading, isError, message } = useSelector(
    (state) => state.receives
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getReceive());

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
    return receives.slice(firstPageIndex, lastPageIndex);
  }, [receives, currentPage]);


  /* Search */
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = receives.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(receives);
    }
  };
  return (
    <>
      {/* Title */}
      <div
        className="receiveTitle text-red-500 flex justify-center text-4xl md:text-6xl font-bold mt-5"
        style={{ fontFamily: "Montserrat" }}
      >
        Receive
      </div>
      {/* Icon */}
      <div className="receiveIcon flex justify-center text-red-500 text-3xl md:text-5xl mt-8">
        <RiUserReceivedLine />
      </div>
      {/* Description */}
      <div
        className="description mx-2 px-4 flex justify-center text-center text-red-500 text-xl font-bold mt-12"
        style={{ fontFamily: "Montserrat" }}
      >
        Search for blood donors near you with your matching blood type.
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
              navigate("/create-receive");
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
            <div className="receives">
              {filteredResults.map((receive) => (
                <ReceiveFeed key={receive._id} receive={receive} />
              ))}
            </div>
          
          </>
        ) : (
          <>
           
            <div className="receives">
              {currentTableData.slice(0).reverse().map((receive) => (
                <ReceiveFeed key={receive._id} receive={receive} />
              ))}
            </div>
            <div className="flex mt-10 justify-center">
              <Pagination
                currentPage={currentPage}
                totalCount={receives.length}
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

export default Receive;
