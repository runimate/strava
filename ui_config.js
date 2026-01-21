// ui_config.js
// 디자인 레이아웃 및 폰트 크기/간격 설정 파일

export const UI_CONFIG = {
  fonts: {
    // =================================================================
    // 1. ANTON 폰트 (기존)
    // =================================================================
    anton: {
      // [Daily Type 1 - 세로 스택]
      d1_l: { labelSize: 13, valueSize: 34, labelToValueGap: 8, stackGap: 20 },
      d1_c: { labelSize: 13, valueSize: 34, labelToValueGap: 6, stackGap: 20 },
      // [Daily Type 2 - 가로 나열]
      d2_l: { labelSize: 12, valueSize: 28, labelToValueGap: 10, colGap: 30 },
      d2_c: { labelSize: 12, valueSize: 28, labelToValueGap: 8, colGap: 40 },
      // [Monthly]
      m1: { monthSize: 16, distanceSize: 44, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 26, statsLvGap: -20, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 48, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 14, statsValueSize: 28, statsLvGap: 6, statsColGap: 34 }
    },

    // ... (기존 DOTS, LCD, GOTHIC, SPEED 코드는 그대로 유지) ...
    dots: {
      d1_l: { labelSize: 14, valueSize: 32, labelToValueGap: 4, stackGap: 18 },
      d1_c: { labelSize: 14, valueSize: 32, labelToValueGap: 4, stackGap: 18 },
      d2_l: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 18 },
      d2_c: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 24 },
      m1: { monthSize: 14, distanceSize: 38, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 26, statsLvGap: -5, statsStackGap: 18 },
      m2: { monthSize: 18, distanceSize: 42, monthToDistGap: 6, distToStatsGap: 16, statsLabelSize: 12, statsValueSize: 24, statsLvGap: 4, statsColGap: 28 }
    },

    lcd: {
      d1_l: { labelSize: 15, valueSize: 38, labelToValueGap: 4, stackGap: 18 },
      d1_c: { labelSize: 15, valueSize: 38, labelToValueGap: 4, stackGap: 18 },
      d2_l: { labelSize: 12, valueSize: 32, labelToValueGap: 4, colGap: 28 },
      d2_c: { labelSize: 12, valueSize: 32, labelToValueGap: 4, colGap: 32 },
      m1: { monthSize: 18, distanceSize: 46, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 14, statsValueSize: 30, statsLvGap: -15, statsStackGap: 18 },
      m2: { monthSize: 18, distanceSize: 52, monthToDistGap: 6, distToStatsGap: 16, statsLabelSize: 16, statsValueSize: 30, statsLvGap: 2, statsColGap: 34 }
    },

    gothic: {
      d1_l: { labelSize: 12, valueSize: 28, labelToValueGap: 6, stackGap: 24 },
      d1_c: { labelSize: 12, valueSize: 28, labelToValueGap: 5, stackGap: 24 },
      d2_l: { labelSize: 10, valueSize: 18, labelToValueGap: 4, colGap: 26 },
      d2_c: { labelSize: 10, valueSize: 18, labelToValueGap: 4, colGap: 30 },
      m1: { monthSize: 14, distanceSize: 34, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 10, statsValueSize: 20, statsLvGap: -10, statsStackGap: 22 },
      m2: { monthSize: 14, distanceSize: 36, monthToDistGap: 8, distToStatsGap: 16, statsLabelSize: 10, statsValueSize: 22, statsLvGap: 6, statsColGap: 32 }
    },

    speed: {
      d1_l: { labelSize: 12, valueSize: 32, labelToValueGap: 4, stackGap: 22 },
      d1_c: { labelSize: 12, valueSize: 32, labelToValueGap: 4, stackGap: 22 },
      d2_l: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 24 },
      d2_c: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 28 },
      m1: { monthSize: 14, distanceSize: 38, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 26, statsLvGap: -10, statsStackGap: 18 },
      m2: { monthSize: 18, distanceSize: 46, monthToDistGap: 4, distToStatsGap: 16, statsLabelSize: 12, statsValueSize: 26, statsLvGap: 4, statsColGap: 28 }
    },

    // =================================================================
    // [NEW] 6. OPERA 폰트 (가로폭이 넓을 수 있음 -> 사이즈 축소)
    // =================================================================
    opera: {
      d1_l: { labelSize: 13, valueSize: 34, labelToValueGap: 8, stackGap: 20 },
      d1_c: { labelSize: 13, valueSize: 34, labelToValueGap: 6, stackGap: 20 },
      
      // [수정] D2 모드 사이즈 축소 (28 -> 24)
      d2_l: { labelSize: 11, valueSize: 24, labelToValueGap: 8, colGap: 25 },
      d2_c: { labelSize: 11, valueSize: 24, labelToValueGap: 6, colGap: 30 },

      m1: { monthSize: 16, distanceSize: 42, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 24, statsLvGap: -15, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 46, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 12, statsValueSize: 26, statsLvGap: 4, statsColGap: 30 }
    },

    // =================================================================
    // [NEW] 7. MARKER 폰트 (두껍고 넓음 -> 더 축소)
    // =================================================================
    marker: {
      d1_l: { labelSize: 13, valueSize: 34, labelToValueGap: 8, stackGap: 20 },
      d1_c: { labelSize: 13, valueSize: 34, labelToValueGap: 6, stackGap: 20 },

      // [수정] D2 모드 사이즈 대폭 축소 (28 -> 22)
      d2_l: { labelSize: 11, valueSize: 22, labelToValueGap: 6, colGap: 24 },
      d2_c: { labelSize: 11, valueSize: 22, labelToValueGap: 6, colGap: 28 },

      m1: { monthSize: 16, distanceSize: 40, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 24, statsLvGap: -15, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 44, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 12, statsValueSize: 26, statsLvGap: 4, statsColGap: 30 }
    },

    // =================================================================
    // [NEW] 8. TYPE 폰트 (타자기체, 폭이 일정하지만 넓음)
    // =================================================================
    type: {
      d1_l: { labelSize: 13, valueSize: 32, labelToValueGap: 8, stackGap: 20 },
      d1_c: { labelSize: 13, valueSize: 32, labelToValueGap: 6, stackGap: 20 },

      // [수정] D2 모드 사이즈 축소 (28 -> 20~22)
      d2_l: { labelSize: 10, valueSize: 20, labelToValueGap: 6, colGap: 24 },
      d2_c: { labelSize: 10, valueSize: 20, labelToValueGap: 6, colGap: 28 },

      m1: { monthSize: 16, distanceSize: 40, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 22, statsLvGap: -15, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 44, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 12, statsValueSize: 24, statsLvGap: 4, statsColGap: 30 }
    },

    // =================================================================
    // [NEW] 9. WRITER 폰트 (세리프, 약간 넓음)
    // =================================================================
    writer: {
      d1_l: { labelSize: 13, valueSize: 34, labelToValueGap: 8, stackGap: 20 },
      d1_c: { labelSize: 13, valueSize: 34, labelToValueGap: 6, stackGap: 20 },

      // [수정] D2 모드 사이즈 축소 (28 -> 24)
      d2_l: { labelSize: 11, valueSize: 24, labelToValueGap: 8, colGap: 26 },
      d2_c: { labelSize: 11, valueSize: 24, labelToValueGap: 6, colGap: 32 },

      m1: { monthSize: 16, distanceSize: 42, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 24, statsLvGap: -15, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 46, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 12, statsValueSize: 26, statsLvGap: 4, statsColGap: 32 }
    },

    // =================================================================
    // [NEW] 10. GRACE 폰트 (필기체, 가독성 위해 작게 조정)
    // =================================================================
    grace: {
      d1_l: { labelSize: 14, valueSize: 36, labelToValueGap: 6, stackGap: 20 },
      d1_c: { labelSize: 14, valueSize: 36, labelToValueGap: 4, stackGap: 20 },

      // [수정] D2 모드 사이즈 축소 (28 -> 26, 필기체라 작으면 안보일 수 있어 간격을 줄임)
      d2_l: { labelSize: 12, valueSize: 26, labelToValueGap: 6, colGap: 22 },
      d2_c: { labelSize: 12, valueSize: 26, labelToValueGap: 4, colGap: 26 },

      m1: { monthSize: 16, distanceSize: 44, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 12, statsValueSize: 26, statsLvGap: -10, statsStackGap: 20 },
      m2: { monthSize: 18, distanceSize: 48, monthToDistGap: 6, distToStatsGap: 24, statsLabelSize: 14, statsValueSize: 28, statsLvGap: 4, statsColGap: 30 }
    }
  }
};

export function applyUIConfigToRoot(state) {
  // 로직은 변경 없음
  const { font, recordType, layout, align } = state;
  const fontConfig = UI_CONFIG.fonts[font] || UI_CONFIG.fonts.anton;
  
  let modeKey = '';
  if (recordType === 'daily') {
    const suffix = (align === 'center') ? '_c' : '_l';
    modeKey = (layout === 'type1') ? `d1${suffix}` : `d2${suffix}`;
  } else {
    modeKey = (layout === 'type1') ? 'm1' : 'm2';
  }
  
  const config = fontConfig[modeKey];
  if (!config) return;

  const root = document.documentElement;
  const set = (k, v) => root.style.setProperty(k, `${v}px`);

  if (recordType === 'daily') {
    set('--ui-label-size', config.labelSize);
    set('--ui-value-size', config.valueSize);
    set('--ui-label-to-value-gap', config.labelToValueGap);
    
    if (layout === 'type1') {
        set('--ui-stack-gap', config.stackGap);
    } else {
        set('--ui-col-gap', config.colGap);
    }
  } else {
    set('--ui-month-size', config.monthSize);
    set('--ui-distance-size', config.distanceSize);
    set('--ui-month-to-dist-gap', config.monthToDistGap);
    set('--ui-dist-to-stats-gap', config.distToStatsGap);
    set('--ui-label-size', config.statsLabelSize);
    set('--ui-value-size', config.statsValueSize);
    set('--ui-label-to-value-gap', config.statsLvGap);
    if (layout === 'type1') {
        set('--ui-stack-gap', config.statsStackGap);
    } else {
        set('--ui-col-gap', config.statsColGap);
    }
  }
}
