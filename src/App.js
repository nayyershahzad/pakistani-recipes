import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';

const PakistaniRecipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [likedRecipes, setLikedRecipes] = useState({});
  const [dailyRecipe, setDailyRecipe] = useState(null);
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const categories = [
    { id: 'sabzi', label: 'سبزی' },
    { id: 'daal', label: 'دال' },
    { id: 'gosht', label: 'گوشت' },
    { id: 'machli', label: 'مچھلی' },
    { id: 'beef', label: 'بیف' }
  ];

  const recipes = {
    sabzi: [
      {
        id: 's0',
        name: 'کریلے کی سبزی',
        description: 'کڑوا تو ہے مگر صحت کا خزانہ ہے! پسند آ جائے گا۔',
        time: '35 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '500 گرام کریلے',
          '2 پیاز، باریک کٹی ہوئی',
          '2 ٹماٹر، باریک کٹے ہوئے',
          'ہری مرچیں',
          'ہلدی پاؤڈر',
          'دھنیا پاؤڈر',
          'گرم مسالہ',
          'نمک حسب ذائقہ'
        ],
        steps: [
          'کریلے کو دھو کر گول گول کاٹیں',
          'نمک لگا کر 15 منٹ رکھیں',
          'پانی نچوڑ کر ہلکا سا تل لیں',
          'پیاز کو تیل میں برأون کریں',
          'تمام مسالے ڈال کر پکائیں',
          'کریلے ڈال کر دم پر رکھیں'
        ]
      },
      {
        id: 's1',
        name: 'بھنڈی مسالہ',
        description: 'بھنڈی کو دیکھ کر سوچ رہے ہیں کہ کیا پکائیں؟ یہ ٹیسٹی ریسپی آپ کو حیران کر دے گی!',
        time: '30 منٹ',
        difficulty: 'آسان',
        ingredients: [
          '500 گرام بھنڈی',
          '2 پیاز، باریک کٹی ہوئی',
          '2 ٹماٹر، باریک کٹے ہوئے',
          '1 چمچ ادرک لہسن پیسٹ',
          '1 چمچ ہلدی پاؤڈر',
          '1 چمچ لال مرچ پاؤڈر',
          '1/2 چمچ گرم مسالہ',
          'نمک حسب ذائقہ',
          '3 چمچ تیل'
        ],
        steps: [
          'بھنڈی کو دھو کر خشک کریں اور ڈیڑھ انچ کے ٹکڑوں میں کاٹ لیں',
          'پین میں تیل گرم کریں اور پیاز کو سنہرا ہونے تک فرائی کریں',
          'ادرک لہسن پیسٹ شامل کریں اور 1 منٹ پکائیں',
          'ٹماٹر ڈالیں اور نرم ہونے تک پکائیں',
          'تمام مسالے ڈال کر 2 منٹ پکائیں',
          'بھنڈی شامل کریں اور ہلکی آنچ پر 15-20 منٹ تک پکائیں'
        ]
      }
    ],
    daal: [
      {
        id: 'd0',
        name: 'مونگ کی دال تڑکے والی',
        description: 'گھر کی مونگ دال، ہر کسی کی پہلی پسند!',
        time: '30 منٹ',
        difficulty: 'آسان',
        ingredients: [
          '1 کپ مونگ دال',
          '1 پیاز، باریک کٹی ہوئی',
          '2-3 ہری مرچیں',
          'تڑکے کے لیے کڑی پتہ',
          'زیرہ',
          'لہسن',
          'نمک حسب ذائقہ',
          'گھی یا تیل'
        ],
        steps: [
          'دال کو دھو کر پکنے رکھ دیں',
          'پریشر کُکر میں 2 سیٹی لگا دیں',
          'تڑکے کے لیے گھی گرم کریں',
          'زیرہ، لہسن اور کڑی پتہ کا تڑکہ لگائیں',
          'مرچیں ڈال کر دال میں تڑکہ لگائیں',
          'ہری دھنیے سے گارنش کریں'
        ]
      },
      {
        id: 'd2',
        name: 'چنے کی دال فرائی',
        description: 'کرارا تڑکہ، مزیدار دال۔ چائے کے ساتھ پرفیکٹ!',
        time: '40 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '1 کپ چنے کی دال',
          '2 پیاز، باریک کٹی ہوئی',
          '2 ٹماٹر',
          'ادرک لہسن پیسٹ',
          'ہری مرچیں',
          'گرم مسالہ',
          'نمک حسب ذائقہ'
        ],
        steps: [
          'دال کو 2 گھنٹے بھگوئیں',
          'پریشر کُکر میں دال پکائیں',
          'پیاز کو گولڈن براؤن کریں',
          'ٹماٹر اور مسالے ڈالیں',
          'دال ملا کر فرائی کریں',
          'گرم مسالہ ڈال کر دم دیں'
        ]
      },
      {
        id: 'd1',
        name: 'دال مخنی',
        description: 'یہ دال کھا کر آپ کہیں گے: وہ! کیا بات ہے!',
        time: '45 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '1 کپ کالی دال',
          '1/4 کپ راجمہ',
          '2 پیاز، باریک کٹی ہوئی',
          '2 ٹماٹر، پیسے ہوئے',
          '2 چمچ کریم',
          '1 چمچ ادرک لہسن پیسٹ',
          'مسالے حسب ذائقہ'
        ],
        steps: [
          'دال اور راجمہ کو رات بھر بھگو دیں',
          'پریشر ککر میں دال، راجمہ اور نمک ڈال کر 4-5 سیٹی تک پکائیں',
          'پین میں تیل گرم کر کے پیاز سنہری کریں',
          'ادرک لہسن پیسٹ اور ٹماٹر ڈال کر پکائیں',
          'دال ملا کر مسالے ڈالیں اور 10 منٹ پکائیں'
        ]
      }
    ],
    gosht: [
      {
        id: 'g0',
        name: 'کیما کڑی',
        description: 'دادی کی پسند! گھر کی ضرورت!',
        time: '45 منٹ',
        difficulty: 'آسان',
        ingredients: [
          '500 گرام قیمہ',
          '2 پیاز',
          '2 ٹماٹر',
          'ادرک لہسن پیسٹ',
          'ہری مرچیں',
          'گرم مسالہ',
          'دھنیا پاؤڈر'
        ],
        steps: [
          'پیاز کو برأون کریں',
          'قیمہ ڈال کر بھونیں',
          'ٹماٹر اور مسالے شامل کریں',
          'پانی ڈال کر پکائیں',
          'آخر میں گرم مسالہ ڈالیں'
        ]
      },
      {
        id: 'g2',
        name: 'مٹن روگن جوش',
        description: 'شادی والا ٹیسٹ، گھر پہ بنائیں!',
        time: '90 منٹ',
        difficulty: 'مشکل',
        ingredients: [
          '1 کلو مٹن',
          '4 پیاز',
          '6 ٹماٹر',
          'دہی',
          'ادرک لہسن پیسٹ',
          'کشمیری مرچ',
          'گرم مسالے'
        ],
        steps: [
          'گوشت کو دہی میں میرینیٹ کریں',
          'پیاز کو گولڈن کریں',
          'ٹماٹر اور مسالے ملائیں',
          'گوشت ڈال کر پکائیں',
          'آخر میں روغن ڈالیں',
          'کڑی پتہ سے گارنش کریں'
        ]
      },
      {
        id: 'g1',
        name: 'کڑاہی گوشت',
        description: 'مہمان کہیں گے: ہوٹل سے منگوایا ہے کیا؟',
        time: '60 منٹ',
        difficulty: 'مشکل',
        ingredients: [
          '1 کلو گوشت، چھوٹے ٹکڑے',
          '4 ٹماٹر، باریک کٹے',
          '2 پیاز، باریک کٹی',
          '2 چمچ ادرک لہسن پیسٹ',
          'تمام گرم مسالے',
          'ہری مرچیں اور دھنیا'
        ],
        steps: [
          'گوشت کو دھو کر مسالوں سے میرینیٹ کریں',
          'تیل گرم کر کے پیاز سنہری کریں',
          'گوشت ڈال کر تیز آنچ پر 5 منٹ پکائیں',
          'ٹماٹر اور مسالے ڈال کر پکائیں',
          'پانی ڈال کر ہلکی آنچ پر گوشت گل جانے تک پکائیں'
        ]
      }
    ],
    machli: [
      {
        id: 'm0',
        name: 'فش پکوڑے',
        description: 'بارش کے موسم کا بہترین سنیک!',
        time: '30 منٹ',
        difficulty: 'آسان',
        ingredients: [
          '500 گرام مچھلی فلیٹس',
          '2 کپ بیسن',
          'ادرک لہسن پیسٹ',
          'ہری مرچیں',
          'نمک حسب ذائقہ',
          'سرخ مرچ پاؤڈر',
          'تلنے کے لیے تیل'
        ],
        steps: [
          'مچھلی کو دھو کر نمک لگائیں',
          'بیسن کا لیپ تیار کریں',
          'مسالے ملا کر بیٹر بنائیں',
          'مچھلی کو بیٹر میں ڈپ کریں',
          'گرم تیل میں تلیں',
          'چٹنی کے ساتھ سرو کریں'
        ]
      },
      {
        id: 'm2',
        name: 'پالک مچھلی',
        description: 'صحت بھی، ذائقہ بھی!',
        time: '45 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '500 گرام مچھلی',
          '2 بنڈل پالک',
          'ادرک لہسن پیسٹ',
          '2 پیاز',
          'ہری مرچیں',
          'گرم مسالہ',
          'دہی'
        ],
        steps: [
          'پالک کو باریک کاٹ لیں',
          'پیاز برأون کریں',
          'مسالے اور پالک ڈالیں',
          'مچھلی شامل کریں',
          'دہی ڈال کر دم پر رکھیں',
          'گرم مسالہ ڈال کر سرو کریں'
        ]
      },
      {
        id: 'm1',
        name: 'مچھلی کڑاہی',
        description: 'سمندر کا مزہ گھر پر!',
        time: '40 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '500 گرام مچھلی فلیٹس',
          '2 پیاز، باریک کٹی',
          '2 ٹماٹر، باریک کٹے',
          'ادرک لہسن پیسٹ',
          'ہری مرچیں',
          'دھنیا پاؤڈر',
          'گرم مسالہ'
        ],
        steps: [
          'مچھلی کو صاف کر کے نمک لگائیں',
          'پیاز کو سنہرا ہونے تک فرائی کریں',
          'ٹماٹر اور مسالے ڈال کر پکائیں',
          'مچھلی ڈال کر دم پر رکھیں',
          'دھنیہ سے گارنش کریں'
        ]
      }
    ],
    beef: [
      {
        id: 'b0',
        name: 'بیف برگر کباب',
        description: 'گھر کا برگر، باہر والوں کو بھول جائیں گے!',
        time: '40 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '500 گرام بیف قیمہ',
          '1 پیاز باریک کٹی',
          'ادرک لہسن پیسٹ',
          'ہری مرچیں',
          'کالی مرچ',
          'انڈا',
          'بریڈ کرمبز'
        ],
        steps: [
          'قیمے میں تمام مسالے ملائیں',
          'انڈا اور بریڈ کرمبز ملائیں',
          'ٹکیاں بنا لیں',
          'تیل میں شالو فرائی کریں',
          'بنز کے ساتھ سرو کریں'
        ]
      },
      {
        id: 'b2',
        name: 'بیف چلی درای',
        description: 'لذیذ چائنیز فیوژن ڈش!',
        time: '50 منٹ',
        difficulty: 'درمیانہ',
        ingredients: [
          '500 گرام بیف باریک کٹی',
          'شملہ مرچ',
          'ہری مرچیں',
          'سویا ساس',
          'چلی ساس',
          'پیاز',
          'لہسن'
        ],
        steps: [
          'بیف کو گلا لیں',
          'سبزیاں باریک کاٹیں',
          'تیز آنچ پر بیف فرائی کریں',
          'سبزیاں اور ساسز ملائیں',
          'کرارا ہونے تک پکائیں'
        ]
      },
      {
        id: 'b1',
        name: 'بیف نہاری',
        description: 'دادی کے ہاتھوں کا مزہ!',
        time: '180 منٹ',
        difficulty: 'مشکل',
        ingredients: [
          '1 کلو بیف',
          'پیاز 3 عدد',
          'ادرک لہسن پیسٹ',
          'نہاری مسالہ',
          'گھی',
          'آٹا 2 چمچ'
        ],
        steps: [
          'بیف کو دھو کر مسالے لگائیں',
          'تیل میں پیاز برائون کریں',
          'گوشت اور مسالے ڈال کر پکائیں',
          'آٹے کا تڑکہ لگائیں',
          'دھنیہ سے گارنش کریں'
        ]
      }
    ]
  };

  useEffect(() => {
    const allRecipes = Object.values(recipes).flat();
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    setDailyRecipe(allRecipes[randomIndex]);
  }, []);

  const handleLike = (recipeId) => {
    setLikedRecipes(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  const toggleRecipeExpansion = (recipeId) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-rose-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">
          کیا پکاؤں؟
        </h1>

        {dailyRecipe && (
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-700">آج کی خاص ڈش</h2>
            <div className="text-xl mb-2">{dailyRecipe.name}</div>
            <p className="text-gray-600">{dailyRecipe.description}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(category => (
            <label
              key={category.id}
              className="relative flex items-center group"
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="hidden"
              />
              <div className={`
                px-6 py-3 rounded-full cursor-pointer
                transition-all duration-200
                ${selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-orange-500 hover:bg-orange-50'
                }
              `}>
                {category.label}
              </div>
            </label>
          ))}
        </div>

        {selectedCategory && recipes[selectedCategory] && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes[selectedCategory].map(recipe => (
              <div key={recipe.id} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-orange-700">{recipe.name}</h3>
                  <button
                    onClick={() => handleLike(recipe.id)}
                    className="p-2 hover:bg-orange-50 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedRecipes[recipe.id]
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>⏱ وقت: {recipe.time}</div>
                  <div>📊 مشکل: {recipe.difficulty}</div>
                </div>
                
                <button
                  onClick={() => toggleRecipeExpansion(recipe.id)}
                  className="mt-4 w-full flex items-center justify-center gap-2 py-2 text-orange-500 hover:bg-orange-50 rounded-md transition-colors"
                >
                  {expandedRecipe === recipe.id ? (
                    <>
                      تفصیل چھپائیں <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      مکمل ترکیب دیکھیں <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>

                {expandedRecipe === recipe.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-orange-700">اجزاء:</h4>
                      <ul className="space-y-1 text-gray-600 pr-5">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="text-right relative flex items-center justify-end">
                            <span>{ingredient}</span>
                            <span className="absolute right-[-20px] top-2">•</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-orange-700">ترکیب:</h4>
                      <ol className="space-y-2 text-gray-600 pr-5">
                        {recipe.steps.map((step, index) => (
                          <li key={index} className="text-right relative flex items-center justify-end">
                            <span>{step}</span>
                            <span className="absolute right-[-20px] top-2">{index + 1}.</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PakistaniRecipes;