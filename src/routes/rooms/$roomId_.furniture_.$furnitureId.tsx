import { createFileRoute } from '@tanstack/react-router'
import { Text } from '../../components/atoms/Text'

// TODO display specific furniture from a room
export const Route = createFileRoute('/rooms/$roomId_/furniture_/$furnitureId')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const { roomId, furnitureId } = Route.useParams()
  return (
    <Text>
      Hello /rooms/{roomId}/furniture/{furnitureId}!
    </Text>
  )
}
