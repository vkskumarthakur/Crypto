 const mobileMenu = document.getElementById("mobile-menu-button");
        const sidebarMenu = document.getElementById("sidebarMenu");
        mobileMenu.onclick = () => sidebarMenu.classList.toggle("active");
// Menu show Hide
// const humbergerMenu = document.querySelector("#humberger-menu");
// const sidebarMenu = document.querySelector("#sidebarMenu");
// const humbergerMenuIcon = document.querySelector("#humberger-menu .secondary-button .fa-bars");

// humbergerMenu.onclick = () => {
//   sidebarMenu.classList.toggle("mobile-menu");
//   humbergerMenuIcon.classList.toggle("fa-times");
// };

// Change theme dark and light mode
const darkModeButton = document.querySelector(".mode-button");
const themeModeIcon = document.querySelector(".mode-button .secondary-button i");
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.body.classList.toggle(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeModeIcon.classList.remove("fa-moon");
        themeModeIcon.classList.add("fa-sun");
    }
}
darkModeButton.onclick =() => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeModeIcon.classList.remove("fa-moon");
        themeModeIcon.classList.add("fa-sun");
        localStorage.setItem('theme', 'dark-mode'); 
    }else{
        themeModeIcon.classList.add("fa-moon");
        themeModeIcon.classList.remove("fa-sun");
        localStorage.setItem('theme', 'light-mode'); 
    }
};

// Set Current time
const todayTimeDiv = document.querySelector("#todayTime");
todayTimeDiv.textContent = new Date().toDateString();


// var chartData = [
//   {
//     date: "2012-01-01",
//     distance: 397,
//     townName: "New York",
//     townName2: "New York",
//     townSize: 25,
//     latitude: 40.71,
//   },
//   {
//     date: "2012-01-02",
//     distance: 371,
//     townName: "Washington",
//     townSize: 14,
//     latitude: 38.89,
//   },
//   {
//     date: "2012-01-03",
//     distance: 433,
//     townName: "Wilmington",
//     townSize: 6,
//     latitude: 34.22,
//   },
//   {
//     date: "2012-01-04",
//     distance: 345,
//     townName: "Jacksonville",
//     townSize: 7,
//     latitude: 30.35,
//   },
//   {
//     date: "2012-01-05",
//     distance: 480,
//     townName: "Miami",
//     townName2: "Miami",
//     townSize: 10,
//     latitude: 25.83,
//   },
//   {
//     date: "2012-01-06",
//     distance: 386,
//     townName: "Tallahassee",
//     townSize: 7,
//     latitude: 30.46,
//   },
//   {
//     date: "2012-01-07",
//     distance: 348,
//     townName: "New Orleans",
//     townSize: 10,
//     latitude: 29.94,
//   },
//   {
//     date: "2012-01-08",
//     distance: 338,
//     townName: "Houston",
//     townName2: "Houston",
//     townSize: 16,
//     latitude: 29.76,
//   },
//   {
//     date: "2012-01-09",
//     distance: 338,
//     townName: "Dalas",
//     townSize: 17,
//     latitude: 32.8,
//   },
//   {
//     date: "2012-01-10",
//     distance: 349,
//     townName: "Oklahoma City",
//     townSize: 11,
//     latitude: 35.49,
//   },
//   {
//     date: "2012-01-11",
//     distance: 410,
//     townName: "Kansas City",
//     townSize: 10,
//     latitude: 39.1,
//   },
//   {
//     date: "2012-01-12",
//     distance: 440,
//     townName: "Denver",
//     townName2: "Denver",
//     townSize: 18,
//     latitude: 39.74,
//   },
// ];
// var chart = AmCharts.makeChart("chartdiv", {
//   type: "serial",
//   theme: "dark",
//   dataDateFormat: "YYYY-MM-DD",
//   dataProvider: chartData,

//   addClassNames: true,
//   startDuration: 1,
//   color: "#FFFFFF",
//   marginLeft: 0,

//   categoryField: "date",
//   categoryAxis: {
//     parseDates: true,
//     minPeriod: "DD",
//     autoGridCount: false,
//     gridCount: 50,
//     gridAlpha: 0.1,
//     gridColor: "#FFFFFF",
//     axisColor: "#555555",
//     dateFormats: [
//       {
//         period: "DD",
//         format: "DD",
//       },
//       {
//         period: "WW",
//         format: "MMM DD",
//       },
//       {
//         period: "MM",
//         format: "MMM",
//       },
//       {
//         period: "YYYY",
//         format: "YYYY",
//       },
//     ],
//   },

//   valueAxes: [
//     {
//       id: "a1",
//       // title: "distance",
//       gridAlpha: 0,
//       axisAlpha: 0,
//     },
//   ],
//   graphs: [
//     {
//       id: "g1",
//       valueField: "distance",
//       // title:  "distance",
//       type: "column",
//       fillAlphas: 0.9,
//       valueAxis: "a1",
//       balloonText: "[[value]] miles",
//       legendValueText: "[[value]] mi",
//       legendPeriodValueText: "total: [[value.sum]] mi",
//       lineColor: "#f2f2f2",
//       alphaField: "alpha",
//     },
//   ],

//   chartCursor: {
//     zoomable: true,
//     categoryBalloonDateFormat: "DD",
//     cursorAlpha: 0,
//     valueBalloonsEnabled: false,
//   },
// });