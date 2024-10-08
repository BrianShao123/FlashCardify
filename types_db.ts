export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          billing_address: Json | null;
          payment_method: Json | null;
          total_cards: number | null;
          cards_rated: number | null;
          daily_streak: number | null;
          max_streak: number | null;
          last_login: string | null;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          billing_address?: Json | null;
          payment_method?: Json | null;
          total_cards?: number | null;
          cards_rated?: number | null;
          daily_streak?: number | null;
          max_streak?: number | null;
          last_login?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          billing_address?: Json | null;
          payment_method?: Json | null;
          total_cards?: number | null;
          cards_rated?: number | null;
          daily_streak?: number | null;
          max_streak?: number | null;
          last_login?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      ai_suggestions: {
        Row: {
          id: string;
          suggestion_text: string;
          created_at: string;
          question_id: string;
          user_id: string;
          preference: 'like' | 'dislike' | 'NA';
        };
        Insert: {
          id?: string;
          suggestion_text: string;
          created_at?: string | null;
          question_id: string;
          user_id: string;
          preference?: 'like' | 'dislike' | 'NA';
        };
        Update: {
          id?: string;
          suggestion_text?: string;
          created_at?: string | null;
          question_id?: string;
          user_id?: string;
          preference?: 'like' | 'dislike' | 'NA';
        };
        Relationships: [
          {
            foreignKeyName: "ai_suggestions_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ai_suggestions_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      },
      flashcards: {
        Row: {
          id: string
          user_id: string
          deck_id: string
          front_text: string
          back_text: string
          created_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          deck_id: string
          front_text: string
          back_text: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id: string
          deck_id?: string
          front_text?: string
          back_text?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_deck_id_fkey"
            columns: ["deck_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          }
        ]
      },
      likes: {
        Row: {
          id: string;
          user_id: string;
          deck_id: string;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          user_id: string;
          deck_id: string;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          deck_id?: string;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "likes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_deck_id_fkey";
            columns: ["deck_id"];
            isOneToOne: false;
            referencedRelation: "decks";
            referencedColumns: ["id"];
          }
        ];
      },
      decks: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          created_at: string | null;
          updated_at: string | null;
          visibility: 'public' | 'unlisted' | 'private';
          likes_count?: number;
        };
        Insert: {
          id: string;
          user_id: string;
          name: string;
          description?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
          visibility?: 'public' | 'unlisted' | 'private';
          likes_count?: number;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
          visibility?: 'public' | 'unlisted' | 'private';
          likes_count?: number;
        };
        Relationships: [
          {
            foreignKeyName: "decks_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      },
      user_progress: {
        Row: {
          id: string
          user_id: string
          flashcard_id: string
          progress: number
          last_reviewed_at: string | null
        }
        Insert: {
          id: string
          user_id: string
          flashcard_id: string
          progress: number
          last_reviewed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          flashcard_id?: string
          progress?: number
          last_reviewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "flashcards"
            referencedColumns: ["id"]
          }
        ]
      },
      challenges: {
        Row: {
          id: string;
          deck_id: string | null;
          user_id: string | null;
          times_taken: number;
          overall_correct: number | null;
          overall_incorrect: number | null;
          overall_accuracy: number | null;
          status: 'started' | 'completed' | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          deck_id?: string | null;
          user_id?: string | null;
          times_taken?: number | null;
          overall_correct?: number | null;
          overall_incorrect?: number | null;
          overall_accuracy?: number | null;
          status?: 'started' | 'completed' | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          deck_id?: string | null;
          user_id?: string | null;
          times_taken?: number | null;
          overall_correct?: number | null;
          overall_incorrect?: number | null;
          overall_accuracy?: number | null;
          status?: 'started' | 'completed' | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_deck_id_fkey";
            columns: ["deck_id"];
            isOneToOne: false;
            referencedRelation: "decks";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenge_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      },
      challenge_history: {
        Row: {
          id: string;
          challenge_id: string | null;
          accuracy: number | null;
          incorrect: number | null;
          correct: number | null;
          ai_suggestion: string | null;
          time_taken: number | null;
          attempt_number: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          challenge_id?: string | null;
          accuracy?: number | null;
          incorrect?: number | null;
          correct?: number | null;
          ai_suggestion?: string | null;
          time_taken?: number | null;
          attempt_number?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          challenge_id?: string | null;
          accuracy?: number | null;
          incorrect?: number | null;
          correct?: number | null;
          ai_suggestion?: string | null;
          time_taken?: number | null;
          attempt_number?: number | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_history_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          }
        ];
      },
      questions: {
        Row: {
          id: string;
          challenge_id: string | null;
          question_number: number | null;
          flashcard_id: string | null;
          question: string;
          choice_a: string;
          choice_b: string;
          choice_c: string;
          choice_d: string;
          answer: string;
          user_answer: string | null;
          status: 'completed' | 'not completed' | null;
          shuffle_index: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          challenge_id?: string | null;
          question_number?: number | null;
          flashcard_id?: string | null;
          question: string;
          choice_a: string;
          choice_b: string;
          choice_c: string;
          choice_d: string;
          answer: string;
          user_answer?: string | null;
          status?: 'completed' | 'not completed' | null;
          shuffle_index?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          challenge_id?: string | null;
          question_number?: number | null;
          flashcard_id?: string | null;
          question?: string;
          choice_a?: string;
          choice_b?: string;
          choice_c?: string;
          choice_d?: string;
          answer?: string;
          user_answer?: string | null;
          status?: 'completed' | 'not completed' | null;
          shuffle_index?: number | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "questions_flashcard_id_fkey";
            columns: ["flashcard_id"];
            isOneToOne: false;
            referencedRelation: "flashcards";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "questions_quiz_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          }
        ];
      };
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
      | "trialing"
      | "active"
      | "canceled"
      | "incomplete"
      | "incomplete_expired"
      | "past_due"
      | "unpaid"
      | "paused"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
    Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

