module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "SixUnits": "96px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "FiveUnits": "80px",
        "OneAndHalfUnits": "24px",
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius4": "4px",
        "Round": "50%",
        "Radius2": "2px"
      },
      "scale": {
        "MaxWidth": "1400px",
        "Small": "48px",
        "XXLarge": "288px",
        "Large": "144px",
        "XLarge": "192px",
        "Medium": "96px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,ts}"
  ]
}