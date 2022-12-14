export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  export const selectTypes: readonly ColourOption[] = [
    { value: "Төрөл сонгох", label: "Төрөл сонгох", color:'#666666', isFixed: true },
    { value: 'Aerobic', label: 'Aerobic', color: '#00B8D9', isFixed: true },
    { value: 'Spinnig', label: 'Spinnig', color: '#0052CC', },
    { value: 'Хүчний дасгал', label: 'Хүчний дасгал', color: '#5243AA' },
    { value: 'Сунгалтын дасгал', label: 'Сунгалтын дасгал', color: '#FF5630', isFixed: true },
  ];
  
  export const selectOptions: readonly ColourOption[] = [
    { value: "Өдөр сонгох", label: "Өдөр сонгох", color:'#666666', isFixed: true },
    { value: "Даваа гараг", label: "Даваа гараг", color:'#FF8B00', isFixed: true },
    { value: 'Мягмар гараг', label: 'Мягмар гараг', color: '#FFC400' },
    { value: 'Лхагва гараг', label: 'Лхагва гараг', color: '#36B37E' },
    { value: 'Пүрэв гараг', label: 'Пүрэв гараг', color: '#00875A' },
    { value: 'Баасан гараг', label: 'Баасан гараг', color: '#253858' },
    { value: 'Бямба гараг', label: 'Бямба гараг', color: '#00B8D9', isFixed: true },
    { value: 'Ням гараг', label: 'Ням гараг', color: '#0052CC', },
  ];

  export const selectTime =[
    { value: 'цаг сонгох', label: 'цаг сонгох'},
    { value: '8:00-10:00', label: '8:00-10:00'},
    { value: '10:00-12:00', label: '10:00-12:00'},
    { value: '18:00-20:00', label: '18:00-20:00'},
    { value: '20:00-22:00', label: '20:00-22:00'},
  ]