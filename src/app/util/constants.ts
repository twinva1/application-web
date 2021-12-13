export enum RequestStatus {
  Submitted = 1,
  Rejected = 2,
  Approved = 3,
  Canceled = 4,
}

export enum ExpenseType {
  Traveling = 5,
  'Group Meal' = 6,
}

export enum UserRole {
  Admin = 1,
  NormalUser = 2,
}

export const RequestBadgeStatus = {
  [RequestStatus.Submitted.toString()]: 'processing',
  [RequestStatus.Rejected.toString()]: 'error',
  [RequestStatus.Approved.toString()]: 'success',
  [RequestStatus.Canceled.toString()]: 'default',
};

export const expenseOption = [
  { viewValue: 'All', value: '' },
  { viewValue: 'Traveling', value: ExpenseType.Traveling },
  { viewValue: 'Group Meal', value: ExpenseType['Group Meal'] },
];

export const requestStatusOption = [
  { viewValue: 'All', value: '' },
  { viewValue: 'Submitted', value: RequestStatus.Submitted },
  { viewValue: 'Rejected', value: RequestStatus.Rejected },
  { viewValue: 'Approved', value: RequestStatus.Approved },
  { viewValue: 'Canceled', value: RequestStatus.Canceled },
];

export const particleOptions = {
  background: {
    color: {
      value: '#f0f2f5',
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#c2a5f7',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#b79aeb',
      opacity: 0.40246529723245905,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: undefined,
      random: false,
      straight: false,
      out_mode: undefined,
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
