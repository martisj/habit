
import UserIcon from 'part:@sanity/base/user-icon'

export default {
  name: 'habit',
  title: 'Habit',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: '',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
