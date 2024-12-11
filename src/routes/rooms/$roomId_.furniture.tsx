import { createFileRoute } from '@tanstack/react-router'
import { Text } from '../../components/atoms/Text'

// TODO display all furniture in room
export const Route = createFileRoute('/rooms/$roomId_/furniture')({
  component: RouteComponent,
})

function RouteComponent() {
  const { roomId } = Route.useParams()
  return <Text>Hello /rooms/{roomId}/furniture!</Text>
}
