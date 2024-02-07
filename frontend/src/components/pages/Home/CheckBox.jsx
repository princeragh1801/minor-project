
function CheckBox({
    heading,item1,item2,item3
}){
    
    return (
        <div>
        <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>
          <ul className="mt-2">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-white"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black "
                  value="white"
                />
                <label
                  for="color-white"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  {
                    

                    item1
                  }
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-white"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black "
                  value="white"
                />
                <label
                  for="color-white"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  {
                    

                    item2
                  }
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-white"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black "
                  value="white"
                />
                <label
                  for="color-white"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  {
                    

                    item3
                  }
                </label>
              </div>
            </li>
            </ul>
            </div>
    );
}
export default CheckBox;