import "./gallery.scss"
import { useState } from "react"

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [newPhoto, setNewPhoto] = useState({ title: "", description: "" })

  const handleAddPhoto = (e) => {
    e.preventDefault()
    if (newPhoto.title.trim()) {
      setPhotos(prev => [...prev, {
        id: Date.now(),
        title: newPhoto.title,
        description: newPhoto.description,
        url: "/upload/default.png", // Placeholder image
        uploadedAt: new Date().toLocaleDateString()
      }])
      setNewPhoto({ title: "", description: "" })
      setShowUploadForm(false)
    }
  }

  return (
    <div className="gallery">
      <div className="container">
        <h1>Gallery</h1>
        
        {photos.length === 0 ? (
          <div className="noPhotos">
            <div className="icon">📷</div>
            <h2>No photos yet</h2>
            <p>Start building your photo collection!</p>
            <button 
              onClick={() => setShowUploadForm(true)}
              className="addPhotoBtn"
            >
              + Add Photo
            </button>
          </div>
        ) : (
          <div className="photosGrid">
            {photos.map(photo => (
              <div key={photo.id} className="photoCard">
                <img src={photo.url} alt={photo.title} />
                <div className="photoInfo">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <span className="uploadDate">{photo.uploadedAt}</span>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setShowUploadForm(true)}
              className="addPhotoBtn grid"
            >
              +
            </button>
          </div>
        )}

        {showUploadForm && (
          <div className="uploadModal">
            <div className="modalContent">
              <h3>Add New Photo</h3>
              <form onSubmit={handleAddPhoto}>
                <input
                  type="text"
                  placeholder="Photo title"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
                <textarea
                  placeholder="Photo description (optional)"
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, description: e.target.value }))}
                  rows="3"
                />
                <div className="modalActions">
                  <button type="submit" className="uploadBtn">Add Photo</button>
                  <button 
                    type="button" 
                    onClick={() => setShowUploadForm(false)}
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

export default Gallery 