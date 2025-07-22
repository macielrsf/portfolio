import { Technology } from '../../../../types/Technology'

interface AppListProps {
  currentPage: number
  pageSize: number
  apps: Technology[]
  onAppClick?: (app: Technology) => void
}

export const AppList = ({ currentPage, pageSize, apps, onAppClick }: AppListProps) => {
  const visibleApps = apps.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  )
  return (
    <div className="apps">
      {visibleApps.map(app => (
        <div
          key={app._id}
          style={{ display: 'inline-block', cursor: 'pointer' }}
          onClick={() => onAppClick && onAppClick(app)}
        >
          <img src={app.appIcon} alt="" />
        </div>
      ))}
    </div>
  )
}
