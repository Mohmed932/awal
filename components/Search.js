import { useCallback, memo, useContext } from "react";
import "@/app/styles/Search.css";
import { useRouter } from "next/navigation";
import { DataContext } from "@/app/context";
import Loadingeight from "./Loading/Loadingeight";

const Search = memo(({ show, setshow, setsearchItem }) => {
  const { stateSearch,isDarkMode } = useContext(DataContext);
  const navigate = useRouter();
  const handelSearch = useCallback(
    (_id) => {
      navigate.push(`/news/${_id}`);
    },
    [navigate]
  );
  return (
    <div className="All">
      {stateSearch.status === "loading" ? (
        <Loadingeight />
      ) : !stateSearch.data ? (
        <Loadingeight />
      ) : show ? (
        stateSearch.data.length > 0 ? (
          stateSearch.data?.map(({ _id, title }) => (
            <div className="All_items" key={_id}>
              <h3
                onClick={() =>
                  handelSearch(_id) &
                  setshow(false) &
                  setsearchItem(false) &
                  window.scrollTo({ top: 0 })
                }
              >
                {title}
              </h3>
            </div>
          ))
        ) : (
          <div className="All_items_search_nothing">
            <h1>يرجي تجربه كلمات اخري </h1>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
});

export default Search;
