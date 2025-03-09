import moment from 'moment'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Spinner } from '../../components'
import { PageContainer } from '../../components/PageContainer'
import { useMainStore } from '../../store/mainStore'
import DropdownMenu from './DropdownMenu'
import TimelineView from './timeline/TimelineView'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  min-height: 200px;
  max-height: 900px;
  height: 100%;
  position: relative;
  overflow: hidden;
`


const CalendarPage = () => {
  const {fetchRooms, fetchBookings} = useMainStore((state) => state.actions)
  const isLoading = useMainStore((state) => state.isLoading)

  useEffect(() => {
    fetchRooms()
    fetchBookings(
      moment().startOf('month').toISOString(),
      moment().endOf('month').toISOString(),
    )
  }, [fetchRooms, fetchBookings])

  return (
    <PageContainer>
      <Wrapper>
          {isLoading ? (
            <Spinner />
          ) : (
            <TimelineView />
          )}
        <DropdownMenu />
      </Wrapper>
    </PageContainer>
  )
}

export default CalendarPage
