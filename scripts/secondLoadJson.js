async function fetchData() {
  try {
    const response = await fetch("/data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching the data", error);
  }
}

async function liAppending(data) {
  let liStringPersonalized = "";
  for (let i = 0; i < Math.min(12, data.length); i++) {
    d = data[i];

    const priceContainerString =
      d.discountedPrice === null
        ? ` <div class="special-price-container flex-c">
            <p class="text-title-01 discount-para black">
                <span class="discounted-container">
                <span class="currency-symbol">₹</span>
                <span class="currency-value">${d.originalPrice.toLocaleString()}</span>
                </span>
            </p>
            <span class="special-offers">
                <button>
                Eligible orders get 20% off
                </button>
            </span>
        </div>
      `
        : `<div
                class="price-container-flex flex-c text-title-01"
            >
                <p class="text-title-01 discount-para">
                <span class="discounted-container">
                    <span class="currency-symbol">₹</span>
                    <span class="currency-value">${d.discountedPrice.toLocaleString()}</span>
                </span>
                </p>
                <p class="original-para">
                <span class="original-container">
                    <span class="currency-symbol">₹</span>
                    <span class="currency-value"
                    >${d.originalPrice.toLocaleString()}</span
                    ></span
                >

                <span class="wt-text-grey">
                    <span class="wt-text-grey">(${
                      100 -
                      Math.round((d.discountedPrice / d.originalPrice) * 100)
                    }% off)</span>
                </span>
                </p>
                <p></p>
            </div>`;

    liStringPersonalized += `
    <li class="per-sale-item">
        <div>
        <a href="" style="width: 100%; display: inline-block">
            <div class="per-sale-img-label-holder">
            <div class="img-hold-hold-hold">
                <div class="per-sale-img-holder-holder">
                <div class="per-sale-img-container">
                    <img
                    src="${d.imgLink}"
                    alt=""
                    />
                </div>
                </div>
            </div>
            <span class="label-container">
                <span class="label-text"> Etsy’s Pick</span>
            </span>
            </div>
            <div class="per-sale-card-info">
            <h3>
                ${d.title}
            </h3>

            <div class="rating-whole-container">
                <div class="rating-whole-flex flex-c">
                <span class="rating-count-icon-container flex-c">
                    <span class="rating-count text-title-small">
                    ${d.rating.toFixed(1)}
                    </span>
                    <div
                    class="rating-icon-review-container flex-c text-title-small"
                    >
                    <span class="rating-icon-container">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 1 24 24"
                        aria-hidden="true"
                        focusable="false"
                        >
                        <path
                            d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"
                        ></path>
                        </svg>
                    </span>
                    <p class="text-title-smaller">(${d.review})</p>
                    </div>
                </span>
                <span
                    class="text-title-small rating-separator-span"
                    >·</span
                >
                <div class="rating-verified-container">
                    <div class="rating-verified-container-flex">
                    <span
                        class="rating-verified-icon-container" style="display:${
                          d.isVerified ? "block" : "none"
                        }"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        >
                        <path
                            d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"
                        ></path>
                        </svg>
                    </span>
                    <p
                        class="rating-verified-text text-title-smaller"
                    >
                        <span>${d.brand}</span>
                    </p>
                    </div>
                </div>
                </div>
            </div>

            ${priceContainerString}

            <div class="extra-margin"></div>
            </div>
        </a>
        <a href="" class="more-like-this"> More like this </a>
        </div>
    </li>
    `;
  }
  personalizedContainer.innerHTML = liStringPersonalized;
}

let displayData = [];

async function fetchAndInit() {
  displayData = await fetchData();
  liAppending(displayData);
  filtering();
}

let selectedType = "all-type";
let selectedPrice = "price-input-0";

function applyFilters() {
  let filteredData = displayData;

  if (selectedType !== "all-type") {
    filteredData = filteredData.filter((d) => d.type === selectedType);
  }

  switch (selectedPrice) {
    case "price-input-1":
      filteredData = filteredData.filter(
        (d) => (d.discountedPrice ?? d.originalPrice) <= 25
      );
      break;
    case "price-input-2":
      filteredData = filteredData.filter(
        (d) =>
          (d.discountedPrice ?? d.originalPrice) <= 50 &&
          (d.discountedPrice ?? d.originalPrice) >= 25
      );
      break;
    case "price-input-3":
      filteredData = filteredData.filter(
        (d) =>
          (d.discountedPrice ?? d.originalPrice) <= 100 &&
          (d.discountedPrice ?? d.originalPrice) >= 50
      );
      break;
    case "price-input-4":
      filteredData = filteredData.filter(
        (d) => (d.discountedPrice ?? d.originalPrice) > 100
      );
      break;
    default:
      break;
  }

  liAppending(filteredData);
}

function filtering() {
  itemTypeRadio.forEach((item) => {
    item.addEventListener("change", (e) => {
      const selectedCategory = e.target.id;
      console.log(`Selected Category is ${selectedCategory}`);

      if (selectedCategory.includes("price")) {
        selectedPrice = selectedCategory;
      } else {
        selectedType = selectedCategory;
      }

      applyFilters();
    });
  });
}
fetchAndInit();

