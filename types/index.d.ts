interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}

interface Experts {
  name: string;
  expertise: string;
  image: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface Services {
  title: string;
  detail: string;
  href: string;
  icon: string;
  color?: string;
}

interface Stats {
  icon: string;
  stat: number;
  title: string;
  iconColor: string;
}
