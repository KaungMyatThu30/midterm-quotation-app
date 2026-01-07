import "./item-manager-app.css";

import { useState, useRef } from "react";

import deleteLogo from "../assets/delete.svg";
import stationaryLogo from "../assets/ink_pen.svg";
import kitchenwareLogo from "../assets/flatware.svg";
import applianceLogo from "../assets/electrical_services.svg";

function ItemManager() {
  /*
   * !!! IMPORTANT !!!
   * - You MUST use the given states and refs in your code.
   * - You MAY add additional state, refs, and variables if needed.
   */

  const [items, setItems] = useState([]);
  const categories = ["Stationary", "Kitchenware", "Appliance"];
  const [errorMsg, setErrorMsg] = useState({ name: "", category: "" });

  // You must use this ref for the item name input
  const itemName = useRef(null);

  const categoriesicon = {
    Stationary: stationaryLogo,
    Kitchenware: kitchenwareLogo,
    Appliance: applianceLogo,
    Delete: deleteLogo,
  };

  //TODO: Your code goes here

  if (itemName == "") {
    setErrorMsg("Item name must not be empty");
    return;
  }

  const isDuplicate = items.some(
    (item) => items.name.toLowerCase() == nameValue.toLowerCase()
  );
  if (isDuplicate) {
    setErrorMsg("Item name must not be duplicated");
    return;
  }

  if ((categories = "")) {
    setErrorMsg("Please select a category");
    return;
  }

  if (price < 0 || price == "") {
    setErrorMsg("Price must not be less than 0");
    return;
  }

  /*
   * !!! IMPORTANT !!!
   * - Implement your output based on the given sample layout.
   * - The id and className attributes below MUST be preserved.
   * - Your CSS MUST use the existing id and className selectors.
   */
  return (
    <>
      <div id="h1">Item Management</div>
      <div id="data-area">
        <table id="item-table" className="item-table">
          <thead>
            <tr>
              <th id="col-item-id">ID</th>
              <th id="col-item-name">Name</th>
              <th id="col-item-category">Category</th>
              <th id="col-item-price">Price</th>
              <th id="col-item-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Stationary">Stationary</option>
                <option value="Kitchenware">Kitchenware</option>
                <option value="Appliance">Appliance</option>
              </select>

              /*
               * TODO: Your code goes here
               * !!! IMPORTANT !!!
               * - All items must be listed here (above the form row).
               * - Your input form must be implemented as the LAST row in this table.
               */
            }
          </tbody>
        </table>
      </div>
      <div id="error-message">
        {/* You MUST display the errorMsg state here. */}
      </div>
    </>
  );
}

export default ItemManager;
