import "./groups.scss"
import { useState } from "react"

const Groups = () => {
  const [groups, setGroups] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newGroup, setNewGroup] = useState({ name: "", description: "" })

  const handleCreateGroup = (e) => {
    e.preventDefault()
    if (newGroup.name.trim()) {
      setGroups(prev => [...prev, {
        id: Date.now(),
        name: newGroup.name,
        description: newGroup.description,
        members: 1,
        createdAt: new Date().toLocaleDateString()
      }])
      setNewGroup({ name: "", description: "" })
      setShowCreateForm(false)
    }
  }

  return (
    <div className="groups">
      <div className="container">
        <h1>Groups</h1>
        
        {groups.length === 0 ? (
          <div className="noGroups">
            <div className="icon">👥</div>
            <h2>No groups yet</h2>
            <p>Create your first group to get started!</p>
            <button 
              onClick={() => setShowCreateForm(true)}
              className="createGroupBtn"
            >
              Create a Group
            </button>
          </div>
        ) : (
          <div className="groupsList">
            {groups.map(group => (
              <div key={group.id} className="groupCard">
                <div className="groupInfo">
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                  <div className="groupMeta">
                    <span>Members: {group.members}</span>
                    <span>Created: {group.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setShowCreateForm(true)}
              className="addGroupBtn"
            >
              + Add Another Group
            </button>
          </div>
        )}

        {showCreateForm && (
          <div className="createGroupModal">
            <div className="modalContent">
              <h3>Create New Group</h3>
              <form onSubmit={handleCreateGroup}>
                <input
                  type="text"
                  placeholder="Group name"
                  value={newGroup.name}
                  onChange={(e) => setNewGroup(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <textarea
                  placeholder="Group description (optional)"
                  value={newGroup.description}
                  onChange={(e) => setNewGroup(prev => ({ ...prev, description: e.target.value }))}
                  rows="3"
                />
                <div className="modalActions">
                  <button type="submit" className="createBtn">Create Group</button>
                  <button 
                    type="button" 
                    onClick={() => setShowCreateForm(false)}
                    className="cancelBtn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Groups 