import React, {useState} from 'react'

/*export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
    //setState асинхронен
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {
                !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>Profile Status</span>
                </div>
            }
            {
                this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={'props.status'}/>
                </div>
            }
        </div>
    }
}*/

export const ProfileStatus = () => {
    let [editMode, setEditMode] = useState(false)

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input autoFocus={true} onBlur={() => setEditMode(!editMode)} value={'props.status'}/>
                    </div>
                    : <div>
                        <span onDoubleClick={() => setEditMode(!editMode)}>Profile Status</span>
                    </div>
            }
        </div>
    )
}
