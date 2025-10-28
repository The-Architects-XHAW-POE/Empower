export type Course = {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
};

export const sixMonthCourses: Course[] = [
  { id: 'first-aid', title: 'First Aid', category: 'Six Month', price: 500, description: 'Comprehensive first aid training covering CPR, wound care, and emergency response.' },
  { id: 'sewing', title: 'Sewing', category: 'Six Month', price: 500, description: 'Hands-on sewing course teaching basic and intermediate garment construction and repair.' },
  { id: 'landscaping', title: 'Landscaping', category: 'Six Month', price: 500, description: 'Practical landscaping skills including plant selection, garden design and maintenance.' },
  { id: 'life-skills', title: 'Life Skills', category: 'Six Month', price: 500, description: 'Life skills course covering budgeting, communication, and job readiness.' },
];

export const sixWeekCourses: Course[] = [
  { id: 'child-minding', title: 'Child Minding', category: 'Six Week', price: 200, description: 'Short course on child care basics, safety and play-based learning.' },
  { id: 'cooking', title: 'Cooking', category: 'Six Week', price: 200, description: 'Fundamental cooking techniques and kitchen safety for everyday meals.' },
  { id: 'garden-maintenance', title: 'Garden Maintenance', category: 'Six Week', price: 200, description: 'Basic garden maintenance and plant care for small residential gardens.' },
];

