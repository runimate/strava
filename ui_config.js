// ui_config.js
// 디자인 레이아웃 및 폰트 크기/간격 설정 파일

export const UI_CONFIG = {
  fonts: {
    // =================================================================
    // 1. ANTON 폰트
    // =================================================================
    anton: {
      // [Daily Type 1 - 세로 스택]
      d1_l: { labelSize: 13, valueSize: 34, labelToValueGap: 8, stackGap: 20 },      // 좌측 정렬
      d1_c: { labelSize: 13, valueSize: 34, labelToValueGap: 6, stackGap: 20 },      // 중앙 정렬 (라벨-값 간격을 살짝 좁힘)

      // [Daily Type 2 - 가로 나열]
      d2_l: { labelSize: 12, valueSize: 28, labelToValueGap: 10, colGap: 30 },       // 좌측 정렬
      d2_c: { labelSize: 12, valueSize: 28, labelToValueGap: 8, colGap: 40 },        // 중앙 정렬 (컬럼 간격을 더 넓힘)

      // [Monthly Type 1 - 상단 강조 + 하단 스택] (Monthly는 좌측 정렬 고정)
      m1: {
        monthSize: 16, distanceSize: 44, monthToDistGap: 8, distToStatsGap: 20,
        statsLabelSize: 12, statsValueSize: 26, statsLvGap: 5, statsStackGap: 14
      },

      // [Monthly Type 2 - 상단 강조 + 하단 가로]
      m2: {
        monthSize: 18, distanceSize: 48, monthToDistGap: 6, distToStatsGap: 24,
        statsLabelSize: 14, statsValueSize: 28, statsLvGap: 6, statsColGap: 34
      }
    },

    // =================================================================
    // 2. DOTS 폰트
    // =================================================================
    dots: {
      d1_l: { labelSize: 14, valueSize: 32, labelToValueGap: 4, stackGap: 18 },
      d1_c: { labelSize: 14, valueSize: 32, labelToValueGap: 4, stackGap: 18 },

      d2_l: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 18 },
      d2_c: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 24 },

      m1: { monthSize: 14, distanceSize: 38, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 14, statsValueSize: 24, statsLvGap: 5, statsStackGap: 14 },
      m2: { monthSize: 18, distanceSize: 42, monthToDistGap: 6, distToStatsGap: 16, statsLabelSize: 16, statsValueSize: 24, statsLvGap: 4, statsColGap: 28 }
    },

    // =================================================================
    // 3. LCD 폰트
    // =================================================================
    lcd: {
      d1_l: { labelSize: 15, valueSize: 38, labelToValueGap: 4, stackGap: 18 },
      d1_c: { labelSize: 15, valueSize: 38, labelToValueGap: 4, stackGap: 18 },

      d2_l: { labelSize: 12, valueSize: 32, labelToValueGap: 4, colGap: 28 },
      d2_c: { labelSize: 12, valueSize: 32, labelToValueGap: 4, colGap: 32 },

      m1: { monthSize: 14, distanceSize: 46, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 14, statsValueSize: 24, statsLvGap: 5, statsStackGap: 14 },
      m2: { monthSize: 18, distanceSize: 52, monthToDistGap: 6, distToStatsGap: 16, statsLabelSize: 16, statsValueSize: 30, statsLvGap: 2, statsColGap: 34 }
    },

    // =================================================================
    // 4. GOTHIC 폰트
    // =================================================================
    gothic: {
      d1_l: { labelSize: 12, valueSize: 28, labelToValueGap: 6, stackGap: 24 },
      d1_c: { labelSize: 12, valueSize: 28, labelToValueGap: 5, stackGap: 24 },

      d2_l: { labelSize: 10, valueSize: 18, labelToValueGap: 4, colGap: 26 },
      d2_c: { labelSize: 10, valueSize: 18, labelToValueGap: 4, colGap: 30 },

      m1: { monthSize: 14, distanceSize: 34, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 10, statsValueSize: 20, statsLvGap: 5, statsStackGap: 14 },
      m2: { monthSize: 14, distanceSize: 36, monthToDistGap: 8, distToStatsGap: 16, statsLabelSize: 10, statsValueSize: 22, statsLvGap: 6, statsColGap: 32 }
    },

    // =================================================================
    // 5. SPEED 폰트
    // =================================================================
    speed: {
      d1_l: { labelSize: 12, valueSize: 32, labelToValueGap: 4, stackGap: 22 },
      d1_c: { labelSize: 12, valueSize: 32, labelToValueGap: 4, stackGap: 22 },

      d2_l: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 24 },
      d2_c: { labelSize: 12, valueSize: 24, labelToValueGap: 4, colGap: 28 },

      m1: { monthSize: 14, distanceSize: 38, monthToDistGap: 8, distToStatsGap: 20, statsLabelSize: 10, statsValueSize: 22, statsLvGap: 5, statsStackGap: 14 },
      m2: { monthSize: 18, distanceSize: 46, monthToDistGap: 4, distToStatsGap: 16, statsLabelSize: 12, statsValueSize: 26, statsLvGap: 4, statsColGap: 28 }
    }
  }
};

export function applyUIConfigToRoot(state) {
  const { font, recordType, layout, align } = state;
  const fontConfig = UI_CONFIG.fonts[font] || UI_CONFIG.fonts.anton;
  
  // 모드 키 생성 (d1_l, d1_c, d2_l, d2_c, m1, m2)
  let modeKey = '';
  
  if (recordType === 'daily') {
    // Daily: 레이아웃 + 정렬 조합
    const suffix = (align === 'center') ? '_c' : '_l';
    modeKey = (layout === 'type1') ? `d1${suffix}` : `d2${suffix}`;
  } else {
    // Monthly: 레이아웃만 확인 (정렬은 항상 좌측 고정)
    modeKey = (layout === 'type1') ? 'm1' : 'm2';
  }
  
  const config = fontConfig[modeKey];
  if (!config) return;

  const root = document.documentElement;
  const set = (k, v) => root.style.setProperty(k, `${v}px`);

  // Daily와 Monthly의 변수 매핑
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
    // Monthly
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
