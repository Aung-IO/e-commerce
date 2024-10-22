import AddPost from './create-post-button'

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 lg:hidden">
      <AddPost/>
    </div>
  )
}
