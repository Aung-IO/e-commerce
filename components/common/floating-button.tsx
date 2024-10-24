import CreatePostButton from '@/feature/inspiration/components/create-post-button'

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 lg:hidden">
      <CreatePostButton/>
    </div>
  )
}
