import React, {useContext, useState,createContext} from 'react';

const Edit = createContext(false);
const toggleEdit = createContext();

export function editprovider({children}){
    const [editMode, setEditMode] = useState<boolean>(false);

    function toggleEditfunc(){
        setEditMode(prevediting => !prevediting)
        return true;
    }

    return (
        <Edit.Provider value={editMode}>
            <toggleEdit.Provider value={toggleEditfunc}>
                {children}
            </toggleEdit.Provider>
        </Edit.Provider>
    );


}