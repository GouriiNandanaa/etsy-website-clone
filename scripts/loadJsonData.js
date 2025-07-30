async function fetchData() {
  try {
    const response = await fetch("/data/correctedData.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching the data");
  }
}

async function valueProcessing() {
  try {
    const data = await fetchData();
    data.forEach((d) => {
      let origPrice = d.originalPrice.toLocaleString();
      console.log(origPrice);
    });
  } catch {}
}

valueProcessing();
