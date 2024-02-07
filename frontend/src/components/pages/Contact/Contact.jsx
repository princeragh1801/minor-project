import React from 'react'
import ProjectPreviewCard from '../../ProjectPreviewCard'
function Contact() {
  return (
    <section className="w-full">
  <div className="mx-[5vw] w-auto px-2 py-10">
    <div className="md:flex md:flex-row md:items-start md:justify-between">
      <div>
        <h1 className="text-xl font-bold">Products</h1>
      </div>
      <div className="mt-6 flex items-center pt-2 md:mt-0 md:space-x-4 md:pt-0">
        <button
          type="button"
          className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
        >
          Sort{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Category{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Color{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Size{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
    <hr className="my-8" />
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
      <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Color</h3>
          <ul className="mt-2">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-white"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="white"
                />
                <label
                  for="color-white"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  White
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-beige"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="beige"
                />
                <label
                  for="color-beige"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Beige
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-blue"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="blue"
                />
                <label
                  for="color-blue"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Blue
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-brown"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="brown"
                />
                <label
                  for="color-brown"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Brown
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-green"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="green"
                />
                <label
                  for="color-green"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Green
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="color-purple"
                  name="color[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="purple"
                />
                <label
                  for="color-purple"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Purple
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Category</h3>
          <ul className="mt-2">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="category-new-arrivals"
                  name="category[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="new-arrivals"
                />
                <label
                  for="category-new-arrivals"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  All New Arrivals
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="category-tees"
                  name="category[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="tees"
                />
                <label
                  for="category-tees"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Tees
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="category-crewnecks"
                  name="category[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="crewnecks"
                />
                <label
                  for="category-crewnecks"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Crewnecks
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="category-sweatshirts"
                  name="category[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="sweatshirts"
                />
                <label
                  for="category-sweatshirts"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Sweatshirts
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="category-pants-shorts"
                  name="category[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="pants-shorts"
                />
                <label
                  for="category-pants-shorts"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  Pants &amp; Shorts
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Sizes</h3>
          <ul className="mt-2">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-xs"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="xs"
                />
                <label
                  for="sizes-xs"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  XS
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-s"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="s"
                />
                <label
                  for="sizes-s"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  S
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-m"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="m"
                />
                <label
                  for="sizes-m"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  M
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-l"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="l"
                />
                <label
                  for="sizes-l"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  L
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-xl"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="xl"
                />
                <label
                  for="sizes-xl"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  XL
                </label>
              </div>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <input
                  id="sizes-2xl"
                  name="sizes[]"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  value="2xl"
                />
                <label
                  for="sizes-2xl"
                  className="ml-3 text-sm font-medium text-gray-900"
                >
                  2XL
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
        <div className='flex flex-wrap'>
        <ProjectPreviewCard/>
        <ProjectPreviewCard/>
        <ProjectPreviewCard/>
        <ProjectPreviewCard/>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
