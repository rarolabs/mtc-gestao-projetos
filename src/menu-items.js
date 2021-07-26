export default {
    items: [
        {
            id: 'admin-panel',
            title: 'Admin Panel',
            type: 'group',
            icon: 'icon-monitor',
            children: [
                {
                    id: 'project-crm',
                    title: 'Project & CRM',
                    type: 'collapse',
                    icon: 'feather icon-package',
                    children: [
                        {
                            id: 'pc-dashboard',
                            title: 'Dashboard',
                            type: 'item',
                            url: '/project-crm/pc-dashboard'
                        },
                        {
                            id: 'pc-propostas',
                            title: 'Propostas',
                            type: 'item',
                            url: '/project-crm/pc-propostas'
                        },
                        {
                            id: 'pc-faturas',
                            title: 'Faturas',
                            type: 'item',
                            url: '/project-crm/pc-faturas'
                        },
                        {
                            id: 'pc-task',
                            title: 'Tarefas',
                            type: 'item',
                            url: '/project-crm/pc-task'
                        }
                    ]
                }
            ]
        }
    ]
}