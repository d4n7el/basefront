export interface IconfigTable {
  columns?: {
    title: string;
    name: string;
    text?: {
      value?: string | number;
    };
    background?: {
      value?: string | number;

      greater_than?: number | 0;
      small_than?: number | 0;
    };
    button?: {
      text?: string;
      cssClass?: string;
      click?: any;
    }[];
  }[];
  rows?: {
    background?: {
      item?: string;
      value?: string;
    }[];
  };
  displayedColumns: string[];
}
