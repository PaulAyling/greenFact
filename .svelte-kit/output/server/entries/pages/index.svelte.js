import { c as create_ssr_component, a as each, e as escape, v as validate_component } from "../../chunks/index-756e41cf.js";
/* empty css                         */const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { carbonData } = $$props;
  let { viewTable } = $$props;
  let { chartData } = $$props;
  const colBand = (str) => {
    console.log("colBand running.....ARG:", str);
    if (str == "low") {
      console.log("intesity fiunc:", str, "rounded green");
      return "rounded bg-green-500";
    } else if (str == "very low") {
      return "rounded bg-green-200";
    } else if (str == "moderate") {
      return "rounded bg-yellow-400";
    } else {
      return "rounded bg-red-400";
    }
  };
  if ($$props.carbonData === void 0 && $$bindings.carbonData && carbonData !== void 0)
    $$bindings.carbonData(carbonData);
  if ($$props.viewTable === void 0 && $$bindings.viewTable && viewTable !== void 0)
    $$bindings.viewTable(viewTable);
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  return `<tbody class="${"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 cursor-pointer "}">${each(carbonData, (areaData) => {
    return `<tr class="${"hover:bg-gray-100 dark:hover:bg-gray-700"}"><th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">${escape(areaData.shortname)}</th>
			<th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">${escape(areaData.dnoregion)}</th>
			<th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}"><div class="${"text-gray-800 text-center p-2 " + escape(colBand(areaData.intensity.index))}">${escape(areaData.intensity.index)}
				</div></th>
		</tr>`;
  })}</tbody>`;
});
const Btn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewTable } = $$props;
  if ($$props.viewTable === void 0 && $$bindings.viewTable && viewTable !== void 0)
    $$bindings.viewTable(viewTable);
  return `<button class="${"text-2xl text-blue-200 hover:text-red-400 active:text-red-300 "}"><p class="${"align-top text-right"}">${escape(viewTable ? "" : "X")}</p></button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewTable } = $$props;
  let { chartData } = $$props;
  if ($$props.viewTable === void 0 && $$bindings.viewTable && viewTable !== void 0)
    $$bindings.viewTable(viewTable);
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"flex flex-row justify-end items-start"}"><div class="${"text-4xl text-blue-400 font-bold text-center w-full"}">${escape(viewTable ? "Carbon Intensity Data" : chartData.dnoregion)}
         <hr class="${"mt-4"}"></div>
    
    ${validate_component(Btn, "Btn").$$render($$result, { viewTable }, {
      viewTable: ($$value) => {
        viewTable = $$value;
        $$settled = false;
      }
    }, {})}</header>`;
  } while (!$$settled);
  return $$rendered;
});
const CardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chartData } = $$props;
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  return `<header class="${"flex flex-col"}">
    <div><h2 class="${"text-blue-400 text-center font-bold p-3"}">Current Carbon Intensity</h2></div>
    <div class="${"text-4xl text-orange-300 text-center font-bold divide-solid"}">${escape(chartData.intensity.forecast)}</div>
    <div class="${"text-gray-300 text-center font-bold divide-solid"}">gCO<sub>2</sub>/kWh
        
        <hr class="${"mt-10"}"></div></header>`;
});
var Pie_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".piechart.svelte-zhv8z{display:block;position:absolute;width:350px;height:350px;border-radius:50%;background-image:conic-gradient(\n			/* pink 0,\n			lightblue 0 0,\n			red 0 0,\n			green 0 0,\n			purple 0 8deg,\n			blue 8deg 8deg, \n			orange 8deg 171deg,\n			cyan 171deg 171deg, \n			gray 171deg 359deg  */\n			orange 0,\n			gray var(--f0_biomass),\n			lightgray var(--f1_coal),\n			blue var(--f2_imports),\n			yellow var(--f3_gas),\n			#778899 var(--f4_nuclear),\n			purple var(--f5_other),\n			red var(--f6_hydro),\n			orange var(--f7_solar) /* blue var(--f8_wimd) */\n		)}.piechart.svelte-zhv8z{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cssParams } = $$props;
  const f0_biomass = cssParams[0];
  const f1_coal = cssParams[1];
  const f2_imports = cssParams[2];
  const f3_gas = cssParams[3];
  const f4_nuclear = cssParams[4];
  const f5_other = cssParams[5];
  const f6_hydro = cssParams[6];
  const f7_solar = cssParams[7];
  const f8_wind = cssParams[8];
  if ($$props.cssParams === void 0 && $$bindings.cssParams && cssParams !== void 0)
    $$bindings.cssParams(cssParams);
  $$result.css.add(css$1);
  return `<div class="${"flex flex-row justify-right pt-20 mb-10"}"><div class="${"piechart svelte-zhv8z"}" style="${"--f0_biomass:" + escape(f0_biomass) + "; --f1_coal:" + escape(f1_coal) + "; --f2_imports:" + escape(f2_imports) + "; --f3_gas:" + escape(f3_gas) + "; --f4_nuclear:" + escape(f4_nuclear) + "; --f5_other:" + escape(f5_other) + "; --f6_hydro:" + escape(f6_hydro) + "; --f7_solar:" + escape(f7_solar) + "; --f8_wind:" + escape(f8_wind)}"></div></div>`;
});
var Block_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-17wbsl3{background:var(--color);width:20px;height:20px;padding:2px}",
  map: null
};
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<div style="${"--color:" + escape(color)}" class="${"svelte-17wbsl3"}"></div>`;
});
const LegendRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fuel } = $$props;
  let { perc } = $$props;
  let { color } = $$props;
  if ($$props.fuel === void 0 && $$bindings.fuel && fuel !== void 0)
    $$bindings.fuel(fuel);
  if ($$props.perc === void 0 && $$bindings.perc && perc !== void 0)
    $$bindings.perc(perc);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<tr><th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}"><div class="${"flex flex-row"}">${validate_component(Block, "Block").$$render($$result, { color }, {}, {})}<div class="${"pl-2"}">${escape(fuel)}</div></div></th>
	<th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">${escape(perc)}</th></tr>`;
});
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chartData } = $$props;
  const legendRaw = chartData.generationmix;
  console.log("legendRaw", legendRaw);
  const addCol = (arr) => {
    let res = [];
    const colors = [
      "orange",
      "gray",
      "lightgray",
      "blue",
      "yellow",
      "#778899",
      "purple",
      "red",
      "orange"
    ];
    for (let i = 0; i < arr.length; i++) {
      const newOb = {
        "fuel": arr[i].fuel,
        "perc": arr[i].perc,
        "color": colors[i]
      };
      res.push(newOb);
    }
    return res;
  };
  const legend = addCol(legendRaw);
  console.log("legend", legend);
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  return `<div><div class="${"flex flex-col mt-10"}"><div class="${"overflow-x-auto sm:rounded-lg"}"><div class="${"inline-block min-w-full align-middle"}"><div class="${"overflow-hidden "}"><table class="${"min-w-full"}"><thead class="${"bg-gray-100 dark:bg-blue-400 "}"><tr><th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"}">Type
								</th>
								<th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"}">%
								</th></tr></thead>
						<tbody class="${"bg-white divide-y divide-blue-200 cursor-pointer "}">${each(legend, (row) => {
    return `${validate_component(LegendRow, "LegendRow").$$render($$result, {
      fuel: row.fuel,
      perc: row.perc,
      color: row.color
    }, {}, {})}`;
  })}</tbody></table></div></div></div></div></div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chartData } = $$props;
  const generationMix = chartData.generationmix;
  const createCssParams = (arr) => {
    const convertToDeg = (arr2) => {
      let res = [];
      for (let i = 0; i < arr2.length; i++) {
        let deg = parseFloat(arr2[i].perc) / 100 * 360;
        res.push(deg);
      }
      return res;
    };
    const degArr = convertToDeg(arr);
    const makeCumulative = (arr2) => {
      let res = [];
      for (let i = 0; i < arr2.length; i++) {
        let cumulativeDeg;
        if (i == 0) {
          cumulativeDeg = arr2[i];
        } else {
          cumulativeDeg = arr2[i] + parseFloat(res[i - 1]);
        }
        res.push(cumulativeDeg);
      }
      return res;
    };
    const cum = makeCumulative(degArr);
    const makeParams = (arr2) => {
      const applyUnit = (n) => {
        if (n == "0") {
          return "0";
        } else {
          return n + "deg";
        }
      };
      let res = [];
      for (let i = 0; i < arr2.length; i++) {
        const rnd = parseInt(arr2[i]);
        const str = String(rnd);
        const current = applyUnit(str);
        let param;
        if (i == 0) {
          param = "0 " + current;
          res.push(param);
        } else {
          const recordBefore = applyUnit(String(parseInt(arr2[i - 1])));
          param = recordBefore + " " + current;
          res.push(param);
        }
      }
      return res;
    };
    const final = makeParams(cum);
    return final;
  };
  const cssParams = createCssParams(generationMix);
  console.log("Chart Data", chartData);
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  return `<main class="${"mb-20"}">${validate_component(CardHeader, "CardHeader").$$render($$result, { chartData }, {}, {})}
	<div class="${"flex flex-row justify-between "}">${validate_component(Pie, "Pie").$$render($$result, { cssParams }, {}, {})}
		${validate_component(Legend, "Legend").$$render($$result, { chartData }, {}, {})}</div></main>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead class="${"bg-gray-100 dark:bg-gray-700"}"><tr><th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">shortname
        </th>
        <th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">dnoregion
        </th>
        <th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"}">intensity
        </th></tr></thead>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { carbonData } = $$props;
  let { viewTable } = $$props;
  let { chartData } = $$props;
  if ($$props.carbonData === void 0 && $$bindings.carbonData && carbonData !== void 0)
    $$bindings.carbonData(carbonData);
  if ($$props.viewTable === void 0 && $$bindings.viewTable && viewTable !== void 0)
    $$bindings.viewTable(viewTable);
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${viewTable ? `<div class="${"flex flex-col"}"><div class="${"overflow-x-auto sm:rounded-lg"}"><div class="${"inline-block min-w-full align-middle"}"><div class="${"overflow-hidden "}"><table class="${"min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"}">${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {})}
							${validate_component(TableRow, "TableRow").$$render($$result, { carbonData, viewTable, chartData }, {
      viewTable: ($$value) => {
        viewTable = $$value;
        $$settled = false;
      },
      chartData: ($$value) => {
        chartData = $$value;
        $$settled = false;
      }
    }, {})}</table></div></div></div></div>` : `${validate_component(Card, "Card").$$render($$result, { chartData }, {}, {})}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var carbonData = [];
  async function loadJson() {
    const fetched = await fetch("https://api.carbonintensity.org.uk/regional/intensity/source/2022-02-14T18:00:00.000Z/fw24h");
    const res = await fetched.json();
    carbonData = res.data[0].regions;
    console.log("Fetched Data:", carbonData);
    return res.data[0].regions;
  }
  const updateCarbonData = async () => {
    try {
      carbonData = await loadJson();
    } catch (e) {
      console.log("error", e);
    }
  };
  updateCarbonData();
  let viewTable = true;
  let chartData = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"max-w-2xl mx-auto p-3"}">${validate_component(Header, "Header").$$render($$result, { viewTable, chartData }, {
      viewTable: ($$value) => {
        viewTable = $$value;
        $$settled = false;
      },
      chartData: ($$value) => {
        chartData = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(Table, "Table").$$render($$result, { carbonData, viewTable, chartData }, {
      viewTable: ($$value) => {
        viewTable = $$value;
        $$settled = false;
      },
      chartData: ($$value) => {
        chartData = $$value;
        $$settled = false;
      }
    }, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
