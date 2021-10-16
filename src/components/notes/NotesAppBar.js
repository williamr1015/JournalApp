import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        // console.log(active);
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch( startUploading( file ) )
        }
    }
    return (
        <div className="notes__appbar">
            <span>9 de agosto 2021</span>

            <input 
            type="file" 
            style={{ display: 'none' }} 
            onChange={ handleFileChange }
            id="fileSelector"
            name="file"
            />

            <div>
                <button 
                className="btn"
                onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                onClick={ handleSave }
                className="btn"
                >
                    Save
                </button>
            </div>
        </div>
    )
}
