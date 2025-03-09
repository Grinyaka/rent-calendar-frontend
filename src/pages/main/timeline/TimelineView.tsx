import moment from 'moment'
import Timeline, {
  DateHeader,
  SidebarHeader,
  TimelineHeaders,
  TimelineMarkers,
  TodayMarker,
} from 'react-calendar-timeline'
import 'react-calendar-timeline/style.css'
import {useShallow} from 'zustand/shallow'
import {useMainStore} from '../../../store/mainStore'
import styled, {useTheme} from 'styled-components'
import CustomSidebarHeader from './CustomSidebarHeader'
import CustomTodayMarker from './CustomTodayMarker'

const TimelineContainer = styled.div`
  height: 100%;
  border: none;
  border-radius: 5px;
  overflow: auto;

  .react-calendar-timeline {
    background-color: ${({theme}) => theme.backgroundColors.card};
    border-radius: 5px;
  }
  /* Header (time labels) */
  .rct-header-root {
    background-color: transparent;
    color: ${({theme}) => theme.textColors.secondary};
    font-size: 14px;
    font-weight: bold;
  }
  .rct-calendar-header {
    border: none;
  }

  /* Group headers (rooms) */
  .rct-sidebar {
    background-color: transparent;
    border-right: none;
  }

  .rct-sidebar-header {
    background-color: transparent;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
  }
  .rct-dateHeader {
    background-color: transparent;
  }
`

const TimelineView = () => {
  const theme = useTheme()
  const {rooms, bookings} = useMainStore(
    useShallow((state) => ({rooms: state.rooms, bookings: state.bookings})),
  )
  const groups = rooms.map((room) => ({
    id: room.id,
    title: room.name,
  }))

  const items = bookings.map((booking) => ({
    id: booking.id,
    group: booking.room_id,
    title: `${booking.client_name} (${booking.client_phone})`,
    start_time: moment(booking.start_time),
    end_time: moment(booking.end_time),
  }))
  const startTime = moment().startOf('day').subtract(12, 'hours').unix() * 1000
  const endTime = moment().add(5, 'days').unix() * 1000

  return (
    <TimelineContainer>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={startTime}
        defaultTimeEnd={endTime}
        canMove={false}
        canResize={false}
        stackItems
        sidebarWidth={150}
        minResizeWidth={100}
        minZoom={1000 * 60 * 60 * 24}
        maxZoom={1000 * 60 * 60 * 24}
        lineHeight={50}
        itemHeightRatio={0.9}
      >
        <TimelineHeaders>
          <SidebarHeader children={CustomSidebarHeader} />
          <DateHeader
            height={50}
            unit="day"
            labelFormat={([fromTime, toTime]) => {
              const date = fromTime.locale('ru').format('DD/dd').split('/')
              return `${date[0]} ${date[1]}`
            }}
            style={{
              color: theme.textColors.secondary,
              fontSize: theme.fontSizes.small,
              fontWeight: 'normal',
              wordBreak: 'break-all',
              minWidth: '100px',
            }}
          />
        </TimelineHeaders>
        <TimelineMarkers>
          <TodayMarker>
            {({styles, date}) => (

              <CustomTodayMarker styles={styles} />
            )}
          </TodayMarker>
        </TimelineMarkers>
      </Timeline>
    </TimelineContainer>
  )
}

export default TimelineView
