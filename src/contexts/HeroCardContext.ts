import React from "react";

const Context = React.createContext({selectedActor: "", setSelectedActor: (name: string)=>{}});

export default Context;
