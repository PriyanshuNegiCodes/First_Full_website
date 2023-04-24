
export interface User {
    customerId: number;
    customerName: string;
    customerPhoneNumber: number;
    customerPassword: string;
    track: Track[];
  }
  
  export interface Track {
    trackName: string;
    trackRating: number;
    trackArtist: Artist;
    trackListened: boolean;
  }
  
  export interface Artist {
    artistName: string;
    artistAge: string;
  }
  